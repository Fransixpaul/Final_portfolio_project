/**
 * Routes for handling story-related requests.
 * 
 * This module defines the routes for the CRUD operations related to stories, including:
 * - Getting all stories, Creating a new story, Updating an existing story
 * - Deleting a story, Liking a story
 *
 * Each route corresponds to a specific HTTP method and is handled by a controller function
 * imported from the "controllers/stories.js" file.
 * 
 * Routes:
 *  - GET /           - Fetch all stories
 *  - POST /          - Create a new story
 *  - PATCH /:id      - Update a specific story by ID
 *  - DELETE /:id     - Delete a specific story by ID
 *  - PATCH /:id/likeStory - Like a specific story by ID
 * 
 * @module routes/stories
 */

import { Router } from "express";
import { getStories, createStory, updateStory, deleteStory, likeStory } from "../controllers/stories.js";

const router = Router();

router.get("/", getStories);
router.post("/", createStory);
router.patch("/:id", updateStory);
router.delete("/:id", deleteStory);
router.patch("/:id/likeStory", likeStory);

export default router;