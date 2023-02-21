const router = require("express").Router();
const express = require("express");
const User = require("../models/UserModel.js");
const Post = require("../models/Post.js");

const bcrypt = require("bcrypt");

//UPTADE

router.put("/updatebyId/:id", async (req, res) => {
  try {
    if (req.body.userId === req.params.id) {
      console.log('testing')
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        try {
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          return res.status(200).json(updatedUser);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      }
      return res.status(404).json('no password provided')
    } else {
      return res.status(401).json("you can update only your account");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//DELETE

router.delete("/deleteById/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(401).json("this user doesn't exist");
    }
    if (req.body.userId === req.params.id) {
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json("User has been deleted...");
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    } else {
      return res.status(401).json("you can delete only your account");
    }
  } catch (err) {
    return res.status(404).json("User not found!");
  }
});

//GET

router.get("/getById/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(401).json({message:"Sorry!, this user doesn't exist"});
    }
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
