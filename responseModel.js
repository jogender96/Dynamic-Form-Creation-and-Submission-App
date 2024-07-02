const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    formId: mongoose.Schema.Types.ObjectId,
    answers: [
        {
            questionId: mongoose.Schema.Types.ObjectId,
            selectedOptions: [String]
        }
    ]
});

module.exports = mongoose.model('Response', responseSchema);
