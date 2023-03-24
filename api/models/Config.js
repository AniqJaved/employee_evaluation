const mongoose = require("mongoose");

const ConfigSchema = new mongoose.Schema(
    {
        configType: {type: String},
        researchType: {type: String},
        contribution: {type: Number}
    },
    {timestamps: true}
);



module.exports = mongoose.model("Config", ConfigSchema)