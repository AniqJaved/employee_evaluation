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

//GET WORKLOAD

router.get("/find/:id", async (req,res)=>{
    try{
        const workload = await Workload.findById(req.params.id);
        const workloadInfo = workload._doc; 
        res.status(200).json(workloadInfo)
    }
    catch(err){
        res.status(500).json(err)
    }
})




module.exports = router