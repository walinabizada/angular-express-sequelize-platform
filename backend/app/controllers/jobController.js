
const Job = require('../database/models/job');
async function create(req, res) {
     if (!req.body.title && !req.body.description && !req.body.referenceNo && !req.body.company && !req.body.location && !req.body.salary && !req.body.expireTime && !req.body.userId) {
          res.status(400).send({
               message: "Content can not be empty!"
          });
          return;
     }

     Job.create(req.body)
          .then(data => {
               res.send({
                    title: 'Success!',
                    message: 'Job was created successfully.'
               });
          })
          .catch(err => {
               res.status(500).send({
                    message:
                         err.message || "Some error occurred while creating the Job."
               });
          });
}

async function update(req, res) {
     const id = req.body.id;

     if (!id && !req.body.title && !req.body.description && !req.body.referenceNo && !req.body.company && !req.body.location && !req.body.salary && !req.body.expireTime && !req.body.userId) {
          res.status(400).send({
               message: "Content can not be empty!"
          });
          return;
     }

     Job.update(req.body, {
          where: { id: id }
     }).then(num => {
          if (num == 1) {
               res.send({
                    title: 'Success!',
                    message: 'Job was updated successfully.'
               });
          } else {
               res.send({
                    title: "Error!",
                    message: `Cannot update Job with id=${id}. Maybe Job was not found or req.body is empty!`
               });
          }
     })
          .catch(err => {
               res.status(500).send({
                    message: "Error updating Job with id=" + id
               });
          });
}

async function getAll(req, res) {
     try {
          // Find the jobs by ID
          const jobs = await Job.findAll();
          if (!jobs) {
               return res.status(404).json({ error: 'jobs not found' });
          }

          // Return the jobs
          return res.status(200).json(jobs);
     } catch (error) {
          console.log(error.message);
          return res.status(500).json({ error: error.message });
     }
}

async function getById(req, res) {
     try {
          const id = req.query.id;
          // console.log('id', id);
          // Find the job by ID
          const job = await Job.findByPk(id);
          if (!job) {
               return res.status(404).json({ error: 'job not found' });
          }

          // Return the job
          return res.status(200).json(job);
     } catch (error) {
          console.log(error.message);
          return res.status(500).json({ error: error.message });
     }
}

async function deleteById(req, res) {
     try {
          const id = req.body.id;
          // console.log('id', id);
          // Find the job by ID
          const job = await Job.findByPk(id);
          if (!job) {
               return res.status(404).json({ error: 'job not found' });
          }

          await Job.destroy({
               where: { id: id }
          });

          // Return the job
          return res.status(200).json({
               title: 'Success!',
               message: 'Job was deleted successfully.'
          });
     } catch (error) {
          console.log(error.message);
          return res.status(500).json({ error: error.message });
     }
}

module.exports = { create, update, getAll, getById, deleteById };