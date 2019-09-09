const mongoose = require('mongoose');

const TransitionSchema = new mongoose.Schema({
    current_state_id : {
        type : String,
        required : true
    },
    next_state_id : {
        type : String,
        required : true
    }
}, { timestamps: true });

module.exports = mongoose.model('transition', TransitionSchema);