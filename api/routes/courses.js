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

//UPDATE COURSE

router.put("/:id", verifyToken ,async (req,res)=>{
    if(req.user.isAdmin){
        try{
            const updatedCourse = await Course.findByIdAndUpdate(
                req.params.id, 
            {
                $set: req.body,
            },
            {new: true}                 // $set will update the entries in database but will not return the updated entries. new: true will be returing the updated entries.
            );

            res.status(200).json(updatedCourse)
        }
        catch(err){
            res.status(500).json(err)
        }
    }

    else{
        res.status(403).json("You not allowed!");
    }
})


//GET COURSE
router.get("/find/:id", verifyToken, async (req, res) =>{
    try{
        const course = await Course.findById(req.params.id);
        res.status(200).json(course);
    }
    catch(err){
        res.status(500).json(err);
    }
}); 


module.exports = router