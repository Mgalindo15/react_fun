import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,

};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.value += 1;
        },
        resetCounter: (state) => {
            state.value = 0;
        },
    },
});

export const { incrementCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;
