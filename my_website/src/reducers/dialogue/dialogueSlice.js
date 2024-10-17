import { createSlice } from '@reduxjs/toolkit';
/* uuidv4 generate global keys to prevent id collision */
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const dialogueSlice = createSlice({
    name: 'dialogue',
    initialState,
    reducers: {
        openDialogueBox: (state, action) => {
            const dialogueWithId = { ...action.payload, id: uuidv4() };
            state.push(dialogueWithId);
        },
        closeDialogueBox: (state, action) => {
            return state.filter(dialogue => dialogue.id !== action.payload.id);
        },
    },
});

export const { openDialogueBox, closeDialogueBox } = dialogueSlice.actions;
export default dialogueSlice.reducer;
