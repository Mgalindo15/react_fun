import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  xPos: 50,
  yPos: 50,
  xPointer: 0,
  yPointer: 0,
  glideOn: false,
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
    setGlide: (state, action) => {
      state.glideOn = action.payload;
    },
    setGlidePointer: (state, action) => {
      state.xPointer = action.payload.xPointer;
      state.yPointer = action.payload.yPointer;
    }
  },
});

export const { setPosition, resetPosition, setGlide } = shiftingBoxSlice.actions;

export default shiftingBoxSlice.reducer;