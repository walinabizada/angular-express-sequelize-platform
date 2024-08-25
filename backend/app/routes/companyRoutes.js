const express = require('express');
const authJwt = require('../middleware/authJwt');
const { create, update, getById, deleteById, getAll } = require('../controllers/companyController');
const router = express.Router();

router.get('/', getAll);
router.post('/create', authJwt.verifyToken, create);
router.put('/update', authJwt.verifyToken, update);
router.get('/company', getById);
router.delete('/delete', authJwt.verifyToken, deleteById);

module.exports = router;
