const mongoose = require('mongoose');
require('dotenv/config');
//connect to db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser : true}, (err) => {
    console.log('Connect to DB', err);
});