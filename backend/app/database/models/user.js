const { DataTypes, Model } = require('sequelize');
const dbc = require('../db_connection.js');

class User extends Model { };

User.init({
  // Define your model's attributes here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('User', 'Admin'),
    defaultValue: 'User'
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: dbc,
  modelName: 'User',
  tableName: 'users',
});

module.exports = User;
