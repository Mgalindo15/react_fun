import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    duration: 0,
    isTicking: false,
}

const stopWatchSlice = createSlice({
    name: "stopwatch",
    initialState,
    reducers: {
        setIsTicking: (state, action) => {
            state.isTicking = action.payload.isTicking;
        },
        resetTicking: (state) => {
            state.duration = 0;
        }
    }
});

export const { setIsTicking, resetTicking } = stopWatchSlice.actions;

export default stopWatchSlice.reducer;