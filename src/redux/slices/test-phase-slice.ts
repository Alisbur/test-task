import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Phase = "not-started" | "continues" | "end";

export type TestPhase = {
  currentPhase: Phase;
};

const initialState: TestPhase = {
  currentPhase: "not-started",
};

const testPhaseSlice = createSlice({
  name: "test-phase",
  initialState,
  reducers: {
    setPhase: (state, action: PayloadAction<Phase>) => {
      state.currentPhase = action.payload;
    },
  },
});

export const { setPhase } = testPhaseSlice.actions;

export const testPhaseReducer = testPhaseSlice.reducer;
