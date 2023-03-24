const router = require("express").Router();
const User = require("../models/User");
const Course  = require("../models/Course");
const Workload = require("../models/Workload");
const Config = require("../models/Config")
const CryptoJS = require("crypto-js");
const verifyToken = require("../verifyToken");
var ObjectId = require('mongodb').ObjectId;



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



router.put("/update", verifyToken ,async (req,res)=>{
    if(req.user.isAdmin){
        try{

            const updateFields = req.body; // an array containing the fields to update for each document
            // //console.log(updateFields)
            const config = await Config.find();
            // const configCollection = req.app.locals.db.collection('config');
            //console.log(configCollection)

            // //console.log(config)
            // updateFields.forEach((updateDoc) => {
            //     const docToUpdate = config.find((doc) => doc._id.toString() == updateDoc._id);
            //     console.log(updateDoc)
            //     if (docToUpdate) {
            //         // const returnobj = Object.assign(docToUpdate, updateDoc);
            //         // return docToUpdate.save();
            //         const {_id, ...updates} = updateDoc; // Destructure the data object and get the _id and updates
            //         console.log(_id)
            //         const filter = {_id: new ObjectId(_id)}; // Create the filter for the update
            //         console.log(filter)
            //         const result = Config.updateOne(filter, {$set: updates}); // Update the config object
            //         console.log(`Modified ${result.modifiedCount} document(s).`);
            //     }
            // });

            // // Promise.all(updatePromises).then((results) => {
            // //     console.log('update results:', results);
            // //     res.status(200).json(config);
            // //   }).catch((error) => {
            // //     console.log('update error:', error);
            // //     res.status(500).send('Error updating config');
            // //   });
            // res.status(200).json(config);


            for (let i = 0; i < updateFields.length; i++) {
                const {_id, ...updates} = updateFields[i]; // Destructure the data object and get the _id and updates
                const filter = {_id: new ObjectId(_id)}; // Create the filter for the update // Here we are converting the _id that we are getting from the admin end to ObjectId to match the format that is present in the Config 
                const result = await Config.updateOne(filter, {$set: updates}, {new: true} );
                
              }
          
              // Fetch and send the updated config array as the response
              const updatedConfig = await Config.find();
              res.status(200).json(updatedConfig);


        }
        catch(err){
            res.status(500).json(err)
        }
    }

    else{
        res.status(403).json("You not allowed!");
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