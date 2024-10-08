export type TQuestionLevels = "easy" | "medium" | "hard";

export type TQuestionAnswerTypes = "single" | "multiple" | "brief" | "text";

export type TPhase = "not-started" | "continues" | "end";


export type TAnswerVariant = {
  id: string;
  value: string;
}

export type TQuestion = {
  id: number;
  question: string;
  type: TQuestionAnswerTypes;
  variants?: TAnswerVariant[];
  level: TQuestionLevels;
}

export type TAnswer = {
  question: TQuestion;
  answer: TAnswerVariant[] | string[];
};

export type TTest = {
  questions: TQuestion[];
  currentQuestion: number;
  currentPhase: TPhase;
  answers: TAnswer[];
  timeLeft: number;
}