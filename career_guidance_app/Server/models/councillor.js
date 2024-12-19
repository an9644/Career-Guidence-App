import mongoose from 'mongoose'

const consilSchema = new mongoose.Schema({
    councilName: { type: String, required: true },
    councilId: { type: String, unique: true },
    occupation:  { type: String, required: true },
    description:  { type: String, required: true },
    rating:  { type: String, required: true }
})
const Councillor = mongoose.model('Councillor Details', consilSchema)

export default Councillor
