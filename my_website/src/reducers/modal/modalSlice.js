/* createSlice automatically generates action creators & types */
import { createSlice } from '@reduxjs/toolkit'; 

const initialState = null;

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => action.payload,
        closeModal: () => null,
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;