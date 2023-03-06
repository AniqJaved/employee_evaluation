const mongoose = require("mongoose");

const ConfigSchema = new mongoose.Schema(
    {
        degree: [{
            degreeName: {
                type: String
            },
            degreeContribution:{
                type: Number
            }
        }],
        creditHour: [{
            classType: {
                type: String
            },
            typeContribution:{
                type: Number
            }
        }],
        managerialSection: [{
            managerialPosition: {
                type: String
            },
            positionContribution:{
                type: Number
            }
        }],
        projectGrantSection:[{
            projectGrant:{
                type: String
            },
            grantContribution:{
                type: Number
            }
        }]
        
    },
    {timestamps: true}
);



module.exports = mongoose.model("Config", ConfigSchema)