import { TQuestion } from "../types/types";

export const TEST_DURATION: number = 300;

export const TEST_QUESTIONS: TQuestion[] = [
  {
    id: 1,
    question: "Какая операция выполняется в цикле for?",
    type: "single",
    variants: [
      { id: "A", value: "Итерация" },
      { id: "B", value: "Присваивание" },
      { id: "C", value: "Условие" },
      { id: "D", value: "Вывод" },
    ],
    level: "easy",
  },
  {
    id: 2,
    question: "Какой тип данных используется для хранения дробных чисел в языке программирования?",
    type: "multiple",
    variants: [
      { id: "A", value: "Integer" },
      { id: "B", value: "Char" },
      { id: "C", value: "String" },
      { id: "D", value: "Float" },
    ],
    level: "easy",
  },
  {
    id: 3,
    question: "Какой язык программирования чаще всего используется для разработки мобильных приложений?",
    type: "single",
    variants: [
      { id: "A", value: "C#" },
      { id: "B", value: "Java" },
      { id: "C", value: "Ruby" },
      { id: "D", value: "Swift" },
    ],
    level: "easy",
  },
  {
    id: 4,
    question: "Что такое массив в программировании?",
    type: "single",
    variants: [
      { id: "A", value: "Условие выполнения определенного действия" },
      { id: "B", value: "Переменная, хранящая одно значение" },
      { id: "C", value: "Отсортированный список элементов" },
      { id: "D", value: "Структура данных, содержащая несколько элементов одного типа" },
    ],
    level: "easy",
  },
  {
    id: 5,
    question: "Что означает термин рекурсия в программировании?",
    type: "single",
    variants: [
      { id: "A", value: "Ошибка в программе" },
      { id: "B", value: "Процесс вызова функции из самой себя" },
      { id: "C", value: "Программа, выполняющая одно действие" },
      { id: "D", value: "Структура данных для хранения информации" },
    ],
    level: "easy",
  },
  {
    id: 6,
    question: "Как при отключенном Strict mode можно объявить переменную и присвоить ей значение в языке JavaScript?",
    type: "multiple",
    variants: [
      { id: "A", value: "var a = 5" },
      { id: "B", value: "let a = 5" },
      { id: "C", value: "a = 5" },
      { id: "D", value: "const a = 5" },
    ],
    level: "easy",
  },
  {
    id: 7,
    question: "Назовите ваше имя?",
    type: "brief",
    level: "medium",
  },
  {
    id: 8,
    question: "Расскажите о себе",
    type: "text",
    level: "easy",
  },
];
