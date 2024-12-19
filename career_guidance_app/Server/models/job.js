import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({
    jobName: { type: String, required: true },
    jobId: { type: String, unique: true },
    description:  { type: String, required: true },
    rating:  { type: String, required: true },
    salarayrange:{type:String,required:true}
})
const Job = mongoose.model('Job Details', jobSchema)

export default Job