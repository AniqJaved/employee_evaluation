const router = require("express").Router();
const User = require("../models/User");
const  Course  = require("../models/Course");
const CryptoJS = require("crypto-js");
const verifyToken = require("../verifyToken");


//ADD COURSE
router.post("/", verifyToken, async(req,res) => {
    if(req.user.isAdmin){
        const newCourse = new Course(req.body);
        try{
            const savedCourse = await newCourse.save();
            res.status(201).json(savedCourse);
        } catch(err){
            res.status(500).json(err)
        }
    }
    else{
        res.status(403).json("You are not allowed!")
    }
})



module.exports = router