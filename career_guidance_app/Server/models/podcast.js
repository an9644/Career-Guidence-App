import mongoose from "mongoose"

const podcastSchema = new mongoose.Schema({
    podcastName:  { type: String, required: true },
    councilName:  { type: String, required: true },
    podcastId: { type: String, unique: true },
    description:  { type: String, required: true },
    rating: { type: String, required: true }
})
const Podcast = mongoose.model('Podcast details', podcastSchema)

export default Podcast