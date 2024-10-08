import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TQuestion, TAnswer, TTest, TPhase } from "../../shared/types/types";

const initialState: TTest = {
  questions: [],
  currentQuestion: 0,
  currentPhase: "not-started",
  answers: [],
  timeLeft: 0,
};

const TestSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    initQuestions: (state, action: PayloadAction<TQuestion[]>) => {
      state.questions = [...action.payload];
      state.currentQuestion = 0;
      },
    setPhase: (state, action: PayloadAction<TPhase>) => {
      state.currentPhase = action.payload;
    },
    nextQuestion: (state) => {
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion = state.currentQuestion + 1;
      } else {
        state.currentPhase = "end";
      }
    },
    addAnswer: (state, action: PayloadAction<TAnswer>) => {
      state.answers = [...state.answers, action.payload];
    },
    setTimeLeft: (state, action: PayloadAction<number>) => {
      state.timeLeft = action.payload;
    },
  },
});

export const { initQuestions, setPhase, nextQuestion, addAnswer, setTimeLeft } = TestSlice.actions;

export const testReducer = TestSlice.reducer;
