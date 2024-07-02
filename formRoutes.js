const express = require('express');
const router = express.Router();
const { createForm, getForms, getForm, submitResponse } = require('../controllers/formController');

router.post('/', createForm);
router.get('/', getForms);
router.get('/:id', getForm);
router.post('/submit', submitResponse);

module.exports = router;
