import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

type Props = {
  children:
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ onClick, children }: Props) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
