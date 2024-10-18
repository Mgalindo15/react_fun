import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  xPos: 50,
  yPos: 50,
};

const shiftingBoxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    setPosition: (state, action) => {
      state.xPos = action.payload.xPos;
      state.yPos = action.payload.yPos;
    },
    resetPosition: (state) => {
      state.xPos = 50;
      state.yPos = 50;
    },
  },
});

export const { setPosition, resetPosition } = shiftingBoxSlice.actions;

export default shiftingBoxSlice.reducer;