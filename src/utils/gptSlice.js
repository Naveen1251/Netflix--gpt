import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSerch : false,
        movieResults: null,
        movieNames: null,
    },
    reducers : {
        toggleGptSearchView : (state)=>{
            state.showGptSerch = !state.showGptSerch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    }
})


export const {toggleGptSearchView,addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;