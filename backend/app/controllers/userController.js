'use strict';

const User = require('../database/models/user');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const moment = require('moment');
const { config } = require('dotenv');
config();

async function registerUser(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    const user = await User.create({ firstName, lastName, email, password: hashedPassword });

    return res.status(200).json({
      title: 'Success!',
      message: 'USER was registered successfully!'
    });

  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
}

async function loginUser(req, res) {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
      // attributes: { exclude: ['password'] }
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        token: null,
        refresh_token: null,
        message: "Invalid Password!",
      });
    }

    const validFrom = moment().format(); // Current time
    const validTo = moment().add(24, 'hours').format(); // 24 hours later

    const token = jwt.sign({ id: user.id }, process.env.secretKeyJWT, {
      expiresIn: 86400, // 24 hours
    });

    const refreshToken = jwt.sign({ id: user.id }, process.env.secretKeyJWT, {
      expiresIn: 604800, // 7 days
    });

    res.status(200).send({
      user: {
        userId: user.id,
        email: user.email,
        first_name: user.firstName,
        last_name: user.lastName,
        user_roles: user.role,
      },
      token: token,
      refresh_token: refreshToken,
      valid_from: validFrom,
      valid_to: validTo,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
}

async function getUserById(req, res) {
  try {
    const id = req.params.id;

    // Find the user by ID
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
}
async function getUsers(req, res) {
  try {

    const users = await User.findAll();
    if (!users) {
      return res.status(404).json({ error: 'Users not found' });
    }

    // Return the user
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
}
async function deleteById(req, res) {
  try {
       const id = req.body.id;
       // console.log('id', id);
       // Find the User by ID
       const user = await User.findByPk(id);
       if (!user) {
            return res.status(404).json({ error: 'User not found' });
       }

       await User.destroy({
            where: { id: id }
       });

       // Return the User
       return res.status(200).json({
            title: 'Success!',
            message: 'User was deleted successfully.'
       });
  } catch (error) {
       console.log(error.message);
       return res.status(500).json({ error: error.message });
  }
}
module.exports = { registerUser, loginUser, getUserById, getUsers, deleteById };