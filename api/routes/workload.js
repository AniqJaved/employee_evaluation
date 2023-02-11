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


// GET ALL WORKLOAD
router.get("/", verifyToken ,async (req,res)=>{
    const query = req.query.new;  //By query we mean users?new=true
    
    if(req.user.isAdmin){
        try{
            const workloads = query ? await Workload.find().populate("courseDetails.courseId").sort({_id:-1}).limit(10) : await Workload.find().populate("courseDetails.courseId"); //sort({_id:-1}) it will sort from last to first and will return the latest data.
            res.status(200).json(workloads) 
        }
        catch(err){
            res.status(500).json(err)
        }
    }

    else{
        res.status(403).json("You are not allowed to see all workloads!");
    }
})

//DELETE WORKLOAD
router.delete("/:id", verifyToken ,async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){                     // I think there is no need of this section of code.
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try{
            await Workload.findByIdAndDelete(req.params.id);
            res.status(200).json("Workload has been deleted.....")
        }
        catch(err){
            res.status(500).json(err)
        }
    }

    else{
        res.status(403).json("You can delete only your workload!");
    }
})




module.exports = router