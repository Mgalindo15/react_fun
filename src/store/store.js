/* configureStore automatically passes slice reducers to combineReducers(),
applies redux-thunk middleware,
sets up Redux DevTools and catches accidental mutations,
composes middleware and DevTools enhancers together and adds to store */

import {configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter/counterSlice';
import shiftingBoxReducer from '../reducers/box/shiftingBoxSlice';
import universalSwitchReducer from '../reducers/universalSwitchSlice';
import stopWatchReducer from '../reducers/etc/stopWatchSlice';

export const store = configureStore ({
    reducer: {
        counter: counterReducer,
        box: shiftingBoxReducer,
        universalSwitch: universalSwitchReducer,
        stopWatch: stopWatchReducer,
    },
});

export default store;