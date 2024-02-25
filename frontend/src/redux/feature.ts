import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface containerState {
  activeFeature: string[];
}

const initialState: containerState = {
  activeFeature: [],
};

const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    setActiveFeature: (state, action: PayloadAction<string[]>) => {
      state.activeFeature = action.payload;
    },
  },
});

export const { setActiveFeature } = featureSlice.actions;
export default featureSlice.reducer;
