import { forwardRef, HTMLAttributes } from "react";
import styles from "./checkbox.module.scss";
import classNames from "classnames";

const cn = classNames.bind(styles);

type Props = {
  id: string;
  value: string;
  isChecked: boolean;
  children:
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
} & HTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef(
  ({ id, value, onChange, isChecked, children }: Props, ref: any) => {
    return (
      <label className={styles.answerVariant} ref={ref}>
        <input
          type="checkbox"
          className={styles.checkbox}
          name={id}
          tabIndex={-1}
          onChange={onChange}
          checked={isChecked}
        />
        <div
          className={cn(
            styles.fakeCheckbox,
            isChecked && styles.fakeCheckbox_checked
          )}
        />
        {children}
      </label>
    );
  }
);
