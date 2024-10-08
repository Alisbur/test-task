import { useEffect } from "react";
import styles from "./App.module.scss";
import { ProgressBar } from "../../shared/ui/ProgressBar/progress-bar";
import { Timer } from "../../shared/ui/Timer/timer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TEST_QUESTIONS } from "../../shared/constants/test-data";
import { TEST_DURATION } from "../../shared/constants/test-data";
import { Question } from "../Question/Question";
import { Button } from "../../shared/ui/Button/button";
import {
  initQuestions,
  setPhase,
  nextQuestion,
  addAnswer,
  setTimeLeft,
} from "../../redux/slices/test-slice";
import { TAnswer } from "../../shared/types/types";

function App() {
  const dispatch = useAppDispatch();

  const { questions, currentQuestion, currentPhase, answers, timeLeft } =
    useAppSelector((state) => state.test);

  useEffect(() => {
    if (!timeLeft && currentPhase !== "end") {
      dispatch(initQuestions(TEST_QUESTIONS));
      dispatch(setTimeLeft(TEST_DURATION));
      dispatch(setPhase("not-started"));
    }
  }, []);

  useEffect(() => {
    if (currentPhase === "continues" && answers.length === questions.length) {
      dispatch(setPhase("end"));
    }
  }, [answers, questions, dispatch, currentPhase]);

  useEffect(() => {}, [timeLeft]);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div className={styles.header__dataField}>
          <span className={styles.header__title}>Тестирование</span>
          <Timer
            timeLeft={timeLeft}
            onTick={(t) => dispatch(setTimeLeft(t))}
            onEnd={() =>
              currentPhase === "continues" && dispatch(setPhase("end"))
            }
            isOn={currentPhase === "continues"}
          />
        </div>
        <ProgressBar
          items={questions}
          current={
            currentPhase !== "not-started" ? currentQuestion + 1 : undefined
          }
        />
      </div>
      <div className={styles.content}>
        {currentPhase === "not-started" && (
          <Button
            onClick={() => {
              dispatch(setPhase("continues"));
            }}
          >
            Начать тестирование
          </Button>
        )}
        {currentPhase === "continues" && !!questions.length && (
          <Question
            questionNumber={currentQuestion + 1}
            question={questions[currentQuestion]}
            onNext={(ans: TAnswer) => {
              dispatch(addAnswer(ans));
              dispatch(nextQuestion());
            }}
          />
        )}
        {currentPhase === "end" && (
          <span className={styles.content__text}>Тестирование завершено</span>
        )}
      </div>
    </div>
  );
}

export default App;
