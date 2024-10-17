import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const dialogueSlice = createSlice({
    name: 'dialogue',
    initialState,
    reducers: {
        openDialogueBox: (state, action) => {
            const dialogueWithId = { ...action.payload, id: uuidv4() }; /* uuidv4 to generate unique IDs for each dialogue box */
            state.push(dialogueWithId);
        },
        closeDialogueBox: (state, action) => {
            return state.filter(dialogue => dialogue.id !== action.payload.id);
        },
    },
});

export const { openDialogueBox, closeDialogueBox } = dialogueSlice.actions;
export default dialogueSlice.reducer;
