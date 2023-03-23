const mongoose = require("mongoose");

const WorkloadSchema = new mongoose.Schema(
    {
        semester: {type: Number},
        year: {type: Number},
        employeeName: {type: String},
        noOfStudents: {type: Number},  //To be removed
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
        creditHour: [{
                creditHourTypeId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Config'
                },
                noOfCreditHour: {
                    type: Number
                }
            }],
        degree:[{
            degreeConfig:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Config' 
            },
            noOfStudents:{
                type: Number
            }
        }],
        managerialSection:[{
            managerialPositionConfig:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Config' 
            }
        }]
       
        
    },
    {timestamps: true}
);

//Virtual field-> This field will be virtual as it will not be hard coded in any database model.
// WorkloadSchema.virtual('courses', {
//     ref: 'Course',
//     localField: 'courseDetails[0].courseId',
//     foreignField: '_id',
//     justOne: true
//   });


// WorkloadSchema.virtual('creditHourType', {
//     ref: 'Config',
//     localField: 'creditHour.creditHourTypeId',
//     foreignField: '_id',
//     justOne: false,
//     options: { select: 'creditHour' }
//   });

// WorkloadSchema.virtual('creditHourType', {
//     ref: 'Config',
//     localField: 'creditHour.creditHourTypeId',
//     foreignField: '_id',
//     justOne: false,
//     options: { select: 'creditHour._id' }
//   });

// WorkloadSchema.virtual('creditHourType', {
//     ref: 'Config',
//     localField: 'creditHour.creditHourTypeId',
//     foreignField: 'creditHour._id',
//     justOne: false
//   });

// WorkloadSchema.virtual('credits', {
//     ref: 'Config',
//     localField: 'creditHour.creditHourTypeId',
//     foreignField: 'creditHour',
//     justOne: true,
//   });

module.exports = mongoose.model("Workload", WorkloadSchema)