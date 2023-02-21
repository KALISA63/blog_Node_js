const router=require("express").Router();
const express = require("express");
const User=require("../models/UserModel.js");
const Post=require("../models/Post.js");



//CREATE NEW POST

router.post("/register", async (req,res)=>{
    const newPost=  new Post(req.body);
    try{
        const savedPost=await newPost.save();
        return res.status(200).json(savedPost);
    }catch(err){
        return res.status(500).json(err);
    }
});
//UPDATE POST

router.put("/:id", async (req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        if (req.body.postId === req.params.id) {
        try{
            const updatedPost=await Post.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            return res.status(200).json(updatedPost)
        }catch(err){
            return res.status(500).json(err);        
        }
        } else{
            return res.status(404).json("you can update only your post!!!")
        }
    }catch(err){
        return res.status(500).json(err);
    }
});
//DELETE POST

router.delete("/:id", async (req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        if (post.username===req.body.username){
        try{
            await post.delete();
            return res.status(200).json("Post have been deleted...")
        }catch(err){
            return res.status(500).json(err);        
        }
        } else{
            return res.status(404).json("you can delete only your post!!!")
        }
    }catch(err){
        return res.status(500).json(err);
    }
});

//GET POST

router.get("/:id",async(req, res)=>
{
    try{
        const post= await Post.findById(req.params.id);
        return res.status(200).json(post);
    }catch(err){
        return res.status(500).json(err)
    }
})

//GET ALL POSTS


router.get("/",async(req, res)=>
{
    const username=req.query.user;
    const catName=req.query.cat;
    try{
        let posts;
        if(username){
            posts=await Post.find({username})
        }else if(catName){
            posts=await Post.find({categories:{
                $in:[catName]
            }})
        }else{posts=await Post.find()
        }
        return res.status(200).json(posts);
    }catch(err){
        return res.status(500).json(err)
    }
})


module.exports=router