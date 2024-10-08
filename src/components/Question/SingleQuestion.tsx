import { useCallback } from "react";
import styles from "./Question.module.scss";
import { TAnswerVariant } from "../../shared/types/types";
// import classNames from "classnames";
import { Checkbox } from "../../shared/ui/Checkbox/checkbox";

// const cn = classNames.bind(styles);

type Props = {
  variants: TAnswerVariant[];
  value: string[];
  setValue: (v: any) => void;
};

export const SingleQuestion = ({ variants, value, setValue }: Props) => {
  const onChange = useCallback(
    (e: any) => {
      const answerId = e.target.name.toString();
      if (!value.includes(answerId)) {
        setValue([answerId]);
      } else {
        setValue([]);
      }
    },
    [value, setValue]
  );

  return (
    <div className={styles.answerWrapper}>
      {variants.map((v) => (
        <Checkbox
          key={v.id}
          id={v.id}
          value={v.value}
          isChecked={value.includes(v.id)}
          onChange={onChange}
        >
          {v.value}
        </Checkbox>
      ))}
    </div>
  );
};