const router = require("express").Router();
const User = require("../models/User");
const  Course  = require("../models/Course");
const Workload = require("../models/Workload");
const CryptoJS = require("crypto-js");
const verifyToken = require("../verifyToken");


//ADD WORKLOAD
router.post("/", verifyToken, async(req,res) => {
    if(req.user.isAdmin){
        const newworkload = new Workload(req.body);
        try{
            const savedWorkload = await newworkload.save();
            res.status(201).json(savedWorkload);
        } catch(err){
            res.status(500).json(err)
        }
    }
    else{
        res.status(403).json("You are not allowed!")
    }
})




module.exports = router