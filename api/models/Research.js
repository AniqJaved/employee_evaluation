const mongoose = require("mongoose");

const ResearchSchema = new mongoose.Schema(
    {
        bs : {type: Number},
        ms: {type: Number},
        researchProject: {type: String}, //It will have value associated with it. For example 1-10Million will have a workload similarly, 10-20 Million will have a different workload.
        intJournal: {type: Number},
        natJournal: {type: Number},
        intConf: {type: Number},
        natConf: {type: Number},
        intBook: {type: Number},
        natBook: {type: Number},
        chapBook: {type: Number},
        intPatent: {type: Number},
        natPatent: {type: Number},
        revJournal: {type: Number},
        techReport: {type: Number},
        devProduct: {type: Number},
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Research", ResearchSchema)