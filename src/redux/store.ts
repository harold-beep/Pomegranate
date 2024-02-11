import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

interface containerState {
  activeFeature: string[];
}

const initialState: containerState = {
  activeFeature: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveFeature: (state, action: PayloadAction<string[]>) => {
      state.activeFeature = action.payload;
    },
  },
});

export const { setActiveFeature } = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});
