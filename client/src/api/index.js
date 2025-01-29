/**
 * API utility functions for story CRUD operations.
 *
 * This module provides functions to interact with the backend API for stories:
 * - Fetching all stories
 * - Creating a new story
 * - Updating a story
 * - Deleting a story
 * - Liking a story
 *
 * Functions:
 *  - fetchStories()       - Fetch all stories.
 *  - createStory(story)   - Create a new story.
 *  - updateStory(id, story) - Update an existing story.
 *  - deleteStory(id)      - Delete a story.
 *  - likeStory(id)        - Like a story.
 *
 * @module api/stories
 */

import axios from "axios";

const url = "http://localhost:5001/stories";

export const fetchStories = async () => axios.get(url);
export const createStory = async (story) => axios.post(url, story);
export const updateStory = async (id, story) => axios.patch(`${url}/${id}`, story);
export const deleteStory = async (id) => axios.delete(`${url}/${id}`);
export const likeStory = async (id) => axios.patch(`${url}/${id}/likeStory`);