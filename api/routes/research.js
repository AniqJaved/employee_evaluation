const router = require("express").Router();
const User = require("../models/User");
const Course  = require("../models/Course");
const Workload = require("../models/Workload");
const Research = require("../models/Research")
const CryptoJS = require("crypto-js");
const verifyToken = require("../verifyToken");


//ADD WORKLOAD
router.post("/", verifyToken, async(req,res) => {
    try{
        const newResearch = new Research(req.body);
        const savedResearch = await newResearch.save();
        res.status(201).json(savedResearch);
    } catch(err){
        res.status(500).json(err)
    }
})


//GET RESEARCH BY OWNER ID
router.get("/find/:id", verifyToken, async (req,res)=>{
    try{ 
        const researchInfo = await Research.findOne({ owner: req.params.id }).populate("owner")
        res.status(200).json(researchInfo)
    }
    catch(err){
        res.status(500).json(err)
    }
})


// GET ALL RESEARCH
router.get("/", verifyToken ,async (req,res)=>{
    const query = req.query.new;  //By query we mean users?new=true
    
    if(req.user.isAdmin){
        try{
            const researchs = query ? await Research.find().populate("owner").sort({_id:-1}).limit(10) : await Research.find().populate("owner"); //sort({_id:-1}) it will sort from last to first and will return the latest data.
            res.status(200).json(researchs) 
        }
        catch(err){
            res.status(500).json(err)
        }
    }

    else{
        res.status(403).json("You are not allowed to see all workloads!");
    }
})


//UPDATE RESEARCH

router.put("/:id", verifyToken ,async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try{
            const updatedResearch = await Research.findByIdAndUpdate(
                req.params.id, 
            {
                $set: req.body,
            },
            {new: true}                 // $set will update the entries in database but will not return the updated entries. new: true will be returing the updated entries.
            );
            
            res.status(200).json(updatedResearch)
        }
        catch(err){
            res.status(500).json(err)
        }
    }

    else{
        res.status(403).json("You can update only your account!");
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