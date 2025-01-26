import mongoose from "mongoose";

// Define the schema for a "Story" document in MongoDB
const storySchema = mongoose.Schema({
    // 'caption' is a required string field that stores the caption for the story
    caption: { type: String, required: true },
    username: { type: String, required: true },
    userId: { type: String, required: false },
    image: { type: String, required: true },
    tags: String,
    likes: { type: Number, default: 0 },
    postDate: { type: Date, default: new Date() },
});

// Create and export the Story model based on the story schema
export default mongoose.model("Story", storySchema);