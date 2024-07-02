const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    text: String,
    isCorrect: Boolean
});

const questionSchema = new mongoose.Schema({
    questionText: String,
    questionType: String,
    options: [optionSchema]
});

const formSchema = new mongoose.Schema({
    title: String,
    questions: [questionSchema]
});

module.exports = mongoose.model('Form', formSchema);
