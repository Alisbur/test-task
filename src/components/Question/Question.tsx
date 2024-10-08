import { useCallback, useState } from "react";
import styles from "./Question.module.scss";
import { TAnswer, TQuestion } from "../../shared/types/types";
import { TextQuestion } from "./TextQuestion";
import { SingleQuestion } from "./SingleQuestion";
import { MultipleQuestion } from "./MultipleQuestion";
import { BriefQuestion } from "./BriefQuestion";
import { Button } from "../../shared/ui/Button/button";

type Props = {
  onNext: (ans: TAnswer) => void;
  question: TQuestion;
  questionNumber: number;
};

export const Question = ({ question, questionNumber, onNext }: Props) => {
  const { type, variants } = question;
  const [value, setValue] = useState<string[]>([]);

  const onSubmit = useCallback(() => {
    onNext({ question, answer: value });
    setValue([]);
  }, [value, onNext, question]);

  return (
    <div className={styles.question}>
      <span
        className={styles.question__text}
      >{`${questionNumber}. ${question.question}`}</span>

      {type === "text" && <TextQuestion value={value} setValue={setValue} />}
      {type === "brief" && <BriefQuestion value={value} setValue={setValue} />}
      {variants && type === "single" && (
        <SingleQuestion variants={variants} value={value} setValue={setValue} />
      )}
      {variants && type === "multiple" && (
        <MultipleQuestion
          variants={variants}
          value={value}
          setValue={setValue}
        />
      )}

      <Button onClick={onSubmit}>Ответить</Button>
    </div>
  );
};
