const mongoose = require('mongoose');

const RequestHistorySchema = new mongoose.Schema({
    request_id : {
        type : String,
        required : true
    },
    state_id : {
        type : String,
        required : true
    },
    action_id : {
        type : String,
        required : true
    }
}, { timestamps: true });

module.exports = mongoose.model('request_history', RequestHistorySchema);