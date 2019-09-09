const express = require('express');
const router = express.Router();

const Post = require('../models/Post');


// GET ALL POSTS
router.get('', async (req,res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        console.log(err);
        res.json({ message : err });
    } 
});

// CREATE SPECIFIC POST
router.post('', (req,res) => {
    const PostData = new Post(req.body);
    return PostData.save()
        .then( data => {
            return res.json(data);
        })
        .catch( err => {
            console.log(err)
           return res.json({ message : err});
        });
});

/* router.post('', async (req,res) => {
    const PostObj = new Post(req.body);
        try {
            const savedPost = await PostObj.save();
            res.json(savedPost);
        } catch (err) {
            console.log(err);
            res.json({ message : err});
        }
}); */


// GET SPECIFIC POST
router.get('/:postID', async (req, res) => {
    try {
        const postOne = await Post.findById(req.params.postID);;
        res.json(postOne)
    } catch (err) {
        console.log(err);
        res.json( { message : err });
    }
});

//DELETE SPECIFIC POST
router.delete('/:postID', async (req,res) => {
    try {
        const deletedPost = await Post.deleteOne( { _id : req.params.postID });
        res.json(deletedPost);
    } catch (err) {
        console.log(err);
        res.json({ message : err });
    }
});

//UPDATE SPECIFIC POST
router.patch('/:postID' , async (req,res) => {
    try {
        const updatedPost = await Post.updateOne({ _id : req.params.postID }, {$set : { title : req.body.title}});
        res.json(updatedPost);
    } catch (err) {
        console.log(err);
        res.json({ message : err});
    }
});

module.exports = router;