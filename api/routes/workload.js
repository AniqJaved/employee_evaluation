const router = require("express").Router();
const User = require("../models/User");
const  Course  = require("../models/Course");
const Workload = require("../models/Workload");
const CryptoJS = require("crypto-js");
const verifyToken = require("../verifyToken");


//ADD WORKLOAD
router.post("/", verifyToken, async(req,res) => {
    try{
        const newworkload = new Workload(req.body);
        const savedWorkload = await newworkload.save();
        res.status(201).json(savedWorkload);
    } catch(err){
        res.status(500).json(err)
    }
})


//GET WORKLOAD BY OWNER ID
router.get("/find/:id", verifyToken, async (req,res)=>{
    try{ 
        const workloadInfo = await Workload.findOne({ owner: req.params.id }).populate("courseDetails.courseId")
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
            // const workloads = await Workload.find().populate({
            //         path: 'creditHour.creditHourTypeId',
            //         model: 'Config',
            //         select: 'creditHour._id'
            //       });

            const workloads = query ? await Workload.find().populate("courseDetails.courseId").populate("creditHour.creditHourTypeId").populate("degree.degreeConfig").populate("managerialSection.managerialPositionConfig").sort({_id:-1}).limit(10) : await Workload.find().populate("courseDetails.courseId").populate("creditHour.creditHourTypeId").populate("degree.degreeConfig").populate("managerialSection.managerialPositionConfig"); //sort({_id:-1}) it will sort from last to first and will return the latest data.
            //const workloads = query ? await Workload.find().populate('creditHour.creditHourTypeId', 'classType typeContribution').sort({_id:-1}).limit(10) : await Workload.find().populate('creditHour.creditHourTypeId', 'classType typeContribution');
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