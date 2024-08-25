
const Company = require('../database/models/company');
async function create(req, res) {
     if (
          !req.body.name &&
          !req.body.industry &&
          !req.body.location &&
          !req.body.employeeCount &&
          !req.body.description &&
          !req.body.website &&
          !req.body.logoUrl &&
          !req.body.userId
     ) {
          res.status(400).send({
               message: "Content can not be empty!"
          });
          return;
     }

     Company.create(req.body)
          .then(data => {
               res.send({
                    title: 'Success!',
                    message: 'Company was created successfully.'
               });
          })
          .catch(err => {
               res.status(500).send({
                    message:
                         err.message || "Some error occurred while creating the Company."
               });
          });
}

async function update(req, res) {
     const id = req.body.id;

     if (
          !id &&
          !req.body.name &&
          !req.body.industry &&
          !req.body.location &&
          !req.body.employeeCount &&
          !req.body.description &&
          !req.body.website &&
          !req.body.logoUrl &&
          !req.body.userId
     ) {
          res.status(400).send({
               message: "Content can not be empty!"
          });
          return;
     }

     Company.update(req.body, {
          where: { id: id }
     }).then(num => {
          if (num == 1) {
               res.send({
                    title: 'Success!',
                    message: 'Company was updated successfully.'
               });
          } else {
               res.send({
                    title: "Error!",
                    message: `Cannot update Company with id=${id}. Maybe Company was not found or req.body is empty!`
               });
          }
     })
          .catch(err => {
               res.status(500).send({
                    message: "Error updating Company with id=" + id
               });
          });
}

async function getAll(req, res) {
     try {
          // Find the Companys by ID
          const companys = await Company.findAll();
          if (!companys) {
               return res.status(404).json({ error: 'Companys not found' });
          }

          // Return the Companys
          return res.status(200).json(companys);
     } catch (error) {
          console.log(error.message);
          return res.status(500).json({ error: error.message });
     }
}

async function getById(req, res) {
     try {
          const id = req.query.id;
          // console.log('id', id);
          // Find the Company by ID
          const company = await Company.findByPk(id);
          if (!company) {
               return res.status(404).json({ error: 'Company not found' });
          }

          // Return the Company
          return res.status(200).json(company);
     } catch (error) {
          console.log(error.message);
          return res.status(500).json({ error: error.message });
     }
}

async function deleteById(req, res) {
     try {
          const id = req.body.id;
          // console.log('id', id);
          // Find the Company by ID
          const company = await Company.findByPk(id);
          if (!company) {
               return res.status(404).json({ error: 'Company not found' });
          }

          await Company.destroy({
               where: { id: id }
          });

          // Return the Company
          return res.status(200).json({
               title: 'Success!',
               message: 'Company was deleted successfully.'
          });
     } catch (error) {
          console.log(error.message);
          return res.status(500).json({ error: error.message });
     }
}

module.exports = { create, update, getAll, getById, deleteById };