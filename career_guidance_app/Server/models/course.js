import mongoose from "mongoose"


const courseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    courseId: { type: String, unique: true },
    description:  { type: String, required: true },
    rating: { type: String, required: true }
})
const Course = mongoose.model('course details', courseSchema)

export default Course