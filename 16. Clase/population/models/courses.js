import mongoose from "mongoose";

const courseCollection = "courses";

const courseScehma = mongoose.Schema({
    title: String,
    description: String,
    difficulty: Number,
    topycs:{
        type:Array,
        default:[]
    },
    professor: String,
    students: {
        type:Array,
        defaul:[]
    }
})

const  courseModel = mongoose.model(courseCollection, courseScehma);

export default courseModel;