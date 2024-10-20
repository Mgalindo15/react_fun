import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const universalSwitchSlice = createSlice({
    name: 'universalSwitch',
    initialState,
    reducers: {
        addComponent: (state, action) => {
            const componentWithId = {
            ...action.payload, 
            id: uuidv4(),
            portalRoot: action.payload.portalRoot,
            };
            state.push(componentWithId);
        },
        removeComponent: (state, action) => {
            return state.filter(component => component.id !== action.payload.id);
        },
        removeComponentsByType: (state, action) => {
            const typeToRemove = action.payload.type;
            return state.filter(component => component.type !== typeToRemove);
        }
    },
});

export const { addComponent, removeComponent, removeComponentsByType } = universalSwitchSlice.actions;

export default universalSwitchSlice.reducer;
