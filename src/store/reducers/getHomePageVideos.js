import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_aPI_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/jomePageVideos",
    async(isNext,{getState}) => {
        const {youtubeApp : {nextPageToken : nextPageTokenFromState , videos}} = getState();
        const response = await
    }
)