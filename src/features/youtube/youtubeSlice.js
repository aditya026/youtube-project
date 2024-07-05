import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    video: [],
    currentPlaying: null,
    searchTerm: "",
    searchResult: [],
    nextPageToken: null,
    recomendedVideo: []
};

const youtubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers:{
        
    }
})

export default youtubeSlice.reducer;