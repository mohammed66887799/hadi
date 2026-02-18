const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    duration: { type: Number, required: true }, // in hours
    content: { type: String, required: true },
    teacher: { type: String, required: true },
    reviews: [{
        user: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true }
    }]
});

module.exports = mongoose.model('Course', courseSchema);