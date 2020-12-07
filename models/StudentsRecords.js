const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
	Name: {
		type: String,
		required: true
    },
    Register_Number: {
        type: Number,
        required: true

    },
    Subject1: {
        type: String,
		required: true
    },
    Subject2: {
        type: String,
		required: true
    },
    Subject3: {
        type: String,
		required: true
    },
    Total: {
        type: Number,
		required: true
    },
    createdAt: Date,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
})

module.exports = mongoose.model("StudentRecord", studentSchema);