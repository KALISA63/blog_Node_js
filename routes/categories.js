const router=require("express").Router();
const Category = require("../models/Category");

router.post("/",async(req,res)=>{
    const newCat=new Category(req.body);
    try{
        const savedCat=await newCat.save();
        res.status(200).json(savedCat);
    }catch(err){
        res.status(500).json(err);
    }
})

//GET 

router.get("/:id",async(req,res)=>{
    try{
        const category=await Category.findById(req.params.id);
        return res.status(200).json(category);
    }catch(err){
        return res.status(500).json(err);
    }
})


//UPDATE POST

router.put("/:id", async (req,res)=>{
    try{
        const post=await Category.findById(req.params.id);
        if (req.body.categoryId === req.params.id) {
        // if (post.username===req.body.username){
        try{
            const updatedCategory=await Category.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            return res.status(200).json(updatedCategory)
        }catch(err){
            return res.status(500).json(err);        
        }
        } else{
            return res.status(404).json("you can't update Categories!!!")
        }
    }catch(err){
        return res.status(500).json(err);
    }
});
//DELETE POST

router.delete("/:id", async (req,res)=>{
    try{
        const category=await Category.findById(req.params.id);
        if (category.username===req.body.username){
        try{
            await category.delete();
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


module.exports=router;