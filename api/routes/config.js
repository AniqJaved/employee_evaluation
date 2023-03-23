const router = require("express").Router();
const User = require("../models/User");
const Course  = require("../models/Course");
const Workload = require("../models/Workload");
const Config = require("../models/Config")
const CryptoJS = require("crypto-js");
const verifyToken = require("../verifyToken");


//ADD CONFIG
router.post("/", verifyToken, async(req,res) => {
    try{
        const newConfig = new Config(req.body);
        const savedConfig = await newConfig.save();
        res.status(201).json(savedConfig);
    } catch(err){
        res.status(500).json(err)
    }
})


// //GET WORKLOAD BY OWNER ID
// router.get("/find/:id", verifyToken, async (req,res)=>{
//     try{ 
//         const workloadInfo = await Workload.findOne({ owner: req.params.id }).populate("courseDetails.courseId")
//         res.status(200).json(workloadInfo)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })


//GET ALL CONFIG
router.get("/", verifyToken, async(req,res)=>{
    if(req.user){
        try{
            const config = await Config.find();
            res.status(200).json(config.reverse());
        }
        catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("You are not allowed!");
    }
})


// //DELETE WORKLOAD
// router.delete("/:id", verifyToken ,async (req,res)=>{
//     if(req.user.id === req.params.id || req.user.isAdmin){
//         if(req.body.password){                     // I think there is no need of this section of code.
//             req.body.password = CryptoJS.AES.encrypt(
//                 req.body.password,
//                 process.env.SECRET_KEY
//             ).toString();
//         }

//         try{
//             await Workload.findByIdAndDelete(req.params.id);
//             res.status(200).json("Workload has been deleted.....")
//         }
//         catch(err){
//             res.status(500).json(err)
//         }
//     }

//     else{
//         res.status(403).json("You can delete only your workload!");
//     }
// })




module.exports = router