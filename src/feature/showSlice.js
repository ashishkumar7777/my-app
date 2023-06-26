import { createSlice } from '@reduxjs/toolkit';

const initialState = {value: 1}
export const showSlice = createSlice({
    name : 'showData',
    initialState,
    reducers : {
        showData : (state) => {
            state.value = state.value;
        },
        increment : (state) => {
            state.value += 1;
        },
        incrementByValue : (state, actions) => {
            state.value += actions.payload;
            console.log(actions)
        }
    }
})

export const {showData, increment, incrementByValue} = showSlice.actions;
export default showSlice.reducer;