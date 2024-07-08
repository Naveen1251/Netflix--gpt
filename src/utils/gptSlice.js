import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSerch : false,
    },
    reducers : {
        toggleGptSearchView : (state)=>{
            state.showGptSerch = !state.showGptSerch;
        }
    }
})


export const {toggleGptSearchView} = gptSlice.actions;
export default gptSlice.reducer;