const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    application_id : {
        type : String,
        required : true
    },
    user_id : {
        type : String,
        required : true
    }
}, { timestamps: true });

module.exports = mongoose.model('request', RequestSchema);