const Form = require('../models/formModel');
const Response = require('../models/responseModel');

exports.createForm = async (req, res) => {
    const { title, questions } = req.body;
    const form = new Form({ title, questions });
    await form.save();
    res.status(201).json(form);
};

exports.getForms = async (req, res) => {
    const forms = await Form.find();
    res.status(200).json(forms);
};

exports.getForm = async (req, res) => {
    const form = await Form.findById(req.params.id);
    res.status(200).json(form);
};

exports.submitResponse = async (req, res) => {
    const { formId, answers } = req.body;
    const response = new Response({ formId, answers });
    await response.save();
    res.status(201).json(response);
};
