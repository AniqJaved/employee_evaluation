const mongoose = require("mongoose");

const ResearchSchema = new mongoose.Schema(
    {
        bs : {type: Number},
        ms: {type: Number},
        researchProject:[{
            researchProjectConfig:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Config' 
            }
        }],
        journal: [{
            journalConfig: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Config'
            },
            noOfJournal: {
                type: Number
            }
        }],
        conf: [{
            confConfig: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Config'
            },
            noOfConf: {
                type: Number
            }
        }],
        book: [{
            bookConfig: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Config'
            },
            noOfBook: {
                type: Number
            }
        }],
        patent: [{
            patentConfig: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Config'
            },
            noOfPatent: {
                type: Number
            }
        }],
        techReport: [{
            techReportConfig: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Config'
            },
            noOfTechReport: {
                type: Number
            }
        }],
        devProduct: [{
            devProductConfig: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Config'
            },
            noOfDevProduct: {
                type: Number
            }
        }],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    },
    {timestamps: true}
);

ResearchSchema.virtual('users', {
    ref: 'User',
    localField: 'owner',
    foreignField: '_id',
    justOne: true
  });

module.exports = mongoose.model("Research", ResearchSchema)