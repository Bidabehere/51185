import mongoose from "mongoose";

const studentCollection = "students";

const studentSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    courses:{
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref:"courses"
                }
            }
        ],
        default: []
    },
    gender: String
})

studentSchema.pre('find', function(){
    this.populate("courses.course");
})

const studentModel = mongoose.model(studentCollection,studentSchema);

export default studentModel;