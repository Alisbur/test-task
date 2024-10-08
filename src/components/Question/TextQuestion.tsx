import styles from "./Question.module.scss";

type Props = {
  value: string[];
  setValue: (v: any) => void;
};

export const TextQuestion = ({ value, setValue }: Props) => {
  return (
    <div className={styles.answerWrapper}>
      <textarea
        className={styles.textArea}
        name="text"
        value={value[0]}
        onChange={(e) => setValue([e.target.value])}
      />
    </div>
  );
};
