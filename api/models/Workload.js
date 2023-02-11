const mongoose = require("mongoose");

const WorkloadSchema = new mongoose.Schema(
    {
        semester: {type: Number},
        year: {type: Number},
        employeeName: {type: String},
        managerialResponsibility: {type: String}, //We source as array from other schema, out of which only field will be choosen
        noOfStudents: {type: Number},
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        courseDetails: [{
            courseId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Course'
            },
            courseContribution: {
                type: Number
            }                        
        }],
    },
    {timestamps: true}
);

//Virtual field-> This field will be virtual as it will not be hard coded in any database model.
WorkloadSchema.virtual('courses', {
    ref: 'Course',
    localField: 'courseDetails[0].courseId',
    foreignField: '_id',
    justOne: true
  });

module.exports = mongoose.model("Workload", WorkloadSchema)