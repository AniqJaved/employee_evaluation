const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js");
const verifyToken = require("../verifyToken")
const { json } = require("express");

//UPDATE USER

router.put("/:id", verifyToken ,async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try{
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, 
            {
                $set: req.body,
            },
            {new: true}                 // $set will update the entries in database but will not return the updated entries. new: true will be returing the updated entries.
            );
            
            res.status(200).json(updatedUser)
        }
        catch(err){
            res.status(500).json(err)
        }
    }

    else{
        res.status(403).json("You can update only your account!");
    }
})


//DELETE USER

router.delete("/:id", verifyToken ,async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){                     // I think there is no need of this section of code.
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted.....")
        }
        catch(err){
            res.status(500).json(err)
        }
    }

    else{
        res.status(403).json("You can delete only your account!");
    }
})





module.exports = router