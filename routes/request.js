const express = require("express");
const router = express.Router();

Request = require("../models/Request");

//create request for workflow

router.post('', async(req, res) => {

    const RequestObj = new Request(req.body);
    try {
        const savedRequest = await RequestObj.save();
        res.json(savedRequest);
        
    } catch (err) {
        console.log(err);
        res.json({ message : err});
    };

});

module.exports = router;