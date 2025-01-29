import * as api from "../api";
import {
    FETCH_ALL_STORIES,
    CREATE_STORY,
    UPDATE_STORY,
    DELETE_STORY
} from "../constants/actionTypes";

// Helper function to handle API requests and dispatch actions
const handleApiRequest = async (apiCall, params, actionType, dispatch) => {
    try {
        const { data } = await apiCall(...params);
        dispatch({ type: actionType, payload: data });
    } catch (error) {
        console.error(error.message);  // Log error to console for debugging
    }
};

// Fetch all stories
export const getStories = () => async (dispatch) => {
    handleApiRequest(api.fetchStories, [], FETCH_ALL_STORIES, dispatch);
};

// Create a new story
export const createStory = (story) => async (dispatch) => {
    handleApiRequest(api.createStory, [story], CREATE_STORY, dispatch);
};

// Update an existing story
export const updateStory = (id, story) => async (dispatch) => {
    handleApiRequest(api.updateStory, [id, story], UPDATE_STORY, dispatch);
};

// Delete a story
export const deleteStory = (id) => async (dispatch) => {
    handleApiRequest(api.deleteStory, [id], DELETE_STORY, dispatch);
};

// Like a specific story
export const likeStory = (id) => async (dispatch) => {
    handleApiRequest(api.likeStory, [id], UPDATE_STORY, dispatch);
};