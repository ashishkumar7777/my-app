import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 0}

export const showSlice = createSlice({
    name : 'showData',
    initialState,
    reducers : {
        showData : (state) => { // state takes the data from initialState
            state.value = state.value;
        },
        increment : (state) => {
            state.value += 1;
        },
        incrementbyValue : (state, action) => {
            state.value = state.value + action.payload;
        }
    },
});

export const {showData, increment, incrementbyValue} = showSlice.actions;
export default showSlice.reducer;