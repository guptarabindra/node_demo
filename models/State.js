const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    process_id : {
        type : String,
        required : true
    }
}, { timestamps: true });

module.exports = mongoose.model('state', StateSchema);