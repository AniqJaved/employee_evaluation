const mongoose = require("mongoose");

const ConfigSchema = new mongoose.Schema(
    {
        configType: {type: String}
        
    },
    {timestamps: true}
);



module.exports = mongoose.model("Config", ConfigSchema)