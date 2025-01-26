import mongoose from "mongoose";
import Story from "../models/storyContent.js";

// Function to get all stories from the database
const getStories = async (req, res) => {

    try {
        // Fetch all stories from the Story model
        const story = await Story.find();
        res.status(200).json(story);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

// Function to create a new story and save it to the database
const createStory = async (req, res) => {
    console.log(req.body);
    const body = req.body;

    // Create a new instance of the Story model with the request body
    const newStory = new Story({
        ...body
    });

    try {
        await newStory.save();
        res.status(201).json(newStory);
    } catch (error) {
        console.log(error.message);
        res.status(409).json({ message: error.message });
    }

}

// Function to update an existing story by its ID
const updateStory = async (req, res) => {
    const { id: _id } = req.params;

    const story = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("This id doesnt belong to any story");
    }

    const updatedStory = await Story.findByIdAndUpdate(_id, story, { new: true });

    res.json(updatedStory);
}

// Function to delete a story by its ID
const deleteStory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("This id doesnt belong to any story");
    }

    await Story.findByIdAndRemove(id);

    res.json({ message: "Story deleted successfully" });
}

// Function to increment the like count of a story by its ID
const likeStory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("This id doesnt belong to any story");
    }

    const story = await Story.findById(id);
        if (!story) {
            return res.status(404).send("Story not found");
        }
    const updatedStory = await Story.findByIdAndUpdate(id, { likes: story.likes + 1 }, { new: true });

    res.json(updatedStory);
}


// Export all functions so they can be used in routes
export { getStories, createStory, updateStory, deleteStory, likeStory };