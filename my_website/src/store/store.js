/* configureStore automatically passes slice reducers to combineReducers(),
applies redux-thunk middleware,
sets up Redux DevTools and catches accidental mutations,
composes middleware and DevTools enhancers together and adds to store */

import {configureStore } from '@reduxjs/toolkit';
import modalReducer from '../reducers/modal/modalSlice';
import counterReducer from '../reducers/counter/counterSlice';
import boxReducer from '../reducers/box/boxSlice';
import dialogueReducer from '../reducers/dialogue/dialogueSlice';

export const store = configureStore ({
    reducer: {
        modal: modalReducer,
        counter: counterReducer,
        box: boxReducer,
        dialogue: dialogueReducer,
    },
});

export default store;