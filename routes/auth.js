const router=require("express").Router();
const express = require("express");
const User=require("../models/UserModel.js");
const bcrypt=require("bcrypt");


//REGISTER

router.post("/register", async (req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        const hashedPass=await bcrypt.hash(req.body.password,salt)
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass,
        });

        const user = await newUser.save();
        return res.status(200).json(user);
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
});
//LOGIN
router.post("/login",async(req,res)=>
    {
        try{
            const user=await User.findOne({username:req.body.username});
            !user&&res.status(400).json("wrong Credential!!!");
            const validated=await bcrypt.compare(req.body.password, user.password)
            !validated&&res.status(400).json("wrong Credential!");
            const {password, ...others}=user._doc;
            return res.status(200).json(others)
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    });
module.exports=router