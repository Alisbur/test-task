import { TQuestion } from "../types/types";

export const TEST_DURATION: number = 45;

export const TEST_QUESTIONS: TQuestion[] = [
  {
    id: 1,
    question: "Что должен знать программист?",
    type: "single",
    variants: [
      { id: "A", value: "Ответ 1" },
      { id: "B", value: "Ответ 2" },
      { id: "C", value: "Ответ 3" },
      { id: "D", value: "Ответ 4" },
    ],
    level: "easy",
  },
  {
    id: 2,
    question: "Что не должен знать программист?",
    type: "multiple",
    variants: [
      { id: "A", value: "Ответ 1" },
      { id: "B", value: "Ответ 2" },
      { id: "C", value: "Ответ 3" },
      { id: "D", value: "Ответ 4" },
    ],
    level: "easy",
  },
  {
    id: 3,
    question: "Что ещё стоит поучить?",
    type: "single",
    variants: [
      { id: "A", value: "Ответ 1" },
      { id: "B", value: "Ответ 2" },
      { id: "C", value: "Ответ 3" },
      { id: "D", value: "Ответ 4" },
    ],
    level: "easy",
  },
  {
    id: 4,
    question: "Как я провёл лето?",
    type: "text",
    level: "easy",
  },
  {
    id: 5,
    question: "Назовите ваше имя?",
    type: "brief",
    level: "medium",
  },
  {
    id: 6,
    question: "Что должен знать программист?",
    type: "single",
    variants: [
      { id: "A", value: "Ответ 1" },
      { id: "B", value: "Ответ 2" },
      { id: "C", value: "Ответ 3" },
      { id: "D", value: "Ответ 4" },
    ],
    level: "medium",
  },
  {
    id: 7,
    question: "Что не должен знать программист?",
    type: "multiple",
    variants: [
      { id: "A", value: "Ответ 1" },
      { id: "B", value: "Ответ 2" },
      { id: "C", value: "Ответ 3" },
      { id: "D", value: "Ответ 4" },
    ],
    level: "medium",
  },
  {
    id: 8,
    question: "Что ещё стоит поучить?",
    type: "single",
    variants: [
      { id: "A", value: "Ответ 1" },
      { id: "B", value: "Ответ 2" },
      { id: "C", value: "Ответ 3" },
      { id: "D", value: "Ответ 4" },
    ],
    level: "easy",
  },
  {
    id: 9,
    question: "Как я провёл лето?",
    type: "text",
    level: "hard",
  },
  {
    id: 10,
    question: "Назовите ваше имя?",
    type: "brief",
    level: "hard",
  },
];
