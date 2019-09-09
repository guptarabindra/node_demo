const mongoose = require('mongoose');

const ActionSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    slug : {
        type : String,
        required : true
    }
}, { timestamps: true });

module.exports = mongoose.model('action', ActionSchema);