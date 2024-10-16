import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    modalOpened: false,
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
        setModalOpened: (state, action) => {
            state.modalOpened = action.payload;
        },
    },
});

export const { incrementCounter, resetCounter, setModalOpened } = counterSlice.actions;
export default counterSlice.reducer;
