const mongoose = require('mongoose');
var os = require("os");

const titleSchema = mongoose.Schema({
    article: {
        type: String,
        required: true,
        default: os.hostname()
    },
    title: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('title', titleSchema)