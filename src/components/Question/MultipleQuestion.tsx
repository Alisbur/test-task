import { useCallback } from "react";
import styles from "./Question.module.scss";
import { TAnswerVariant } from "../../shared/types/types";
import classNames from "classnames";

const cn = classNames.bind(styles)

type Props = {
  variants: TAnswerVariant[];
  value: string[];
  setValue: (v: any) => void;
};

export const MultipleQuestion = ({ variants, value, setValue }: Props) => {
  const onChange = useCallback(
    (e: any) => {
      const answerId = e.target.name.toString();
      if (!value.includes(answerId)) {
        setValue((state: string[]) => [...state, answerId]);
      } else {
        setValue(value.filter((item) => item !== answerId));
      }
    },
    [value, setValue]
  );

  return (
    <div className={styles.answerWrapper}>
      {variants.map((v) => (
        <label className={styles.answerVariant} key={v.id}>
          <input
            type="checkbox"
            className={styles.checkbox}
            name={v.id}
            onChange={onChange}
            checked={value.includes(v.id)}
          />
          <div className={cn(styles.fakeCheckbox, value.includes(v.id) && styles.fakeCheckbox_checked )} />
          <span>{v.value}</span>
        </label>
      ))}
    </div>
  );
};
