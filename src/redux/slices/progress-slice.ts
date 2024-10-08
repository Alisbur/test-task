import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TAnswer } from "../../shared/types/types";

export type Progress = {
  answers: TAnswer[];
  timeLeft: number;
};

const initialState: Progress = {
  answers: [],
  timeLeft: 0,
};

const ProgressSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<TAnswer>) => {
      state.answers = [...state.answers, action.payload];
    },
    saveTimeLeft: (state, action: PayloadAction<number>) => {
      state.timeLeft = action.payload;
    },
  },
});

export const { addAnswer, saveTimeLeft } = ProgressSlice.actions;

export const progressReducer = ProgressSlice.reducer;
