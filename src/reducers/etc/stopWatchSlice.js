import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    time: 0,
    isTicking: false,
}

const stopWatchSlice = createSlice({
    name: "stopWatch",
    initialState,
    reducers: {
        setTime: (state, action) => {
            state.time = parseFloat(action.payload.time);
        },
        resetTime: (state) => {
            state.time = 0;
        },
        startTicking: (state) => {
            state.isTicking = true;
        },
        stopTicking: (state) => {
            state.isTicking = false;
        },
    }
});

export const { resetTime, setTime, startTicking, stopTicking } = stopWatchSlice.actions;

export default stopWatchSlice.reducer;