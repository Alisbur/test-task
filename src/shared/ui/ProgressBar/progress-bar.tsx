import styles from "./progress-bar.module.scss";
import classNames from "classnames";
import { TQuestionLevels } from "../../types/types";

const cn = classNames.bind(styles);

type Item = {
  level: TQuestionLevels;
};

type Props = {
  items: Item[],
  current: number | undefined,
};

// export function ProgressBar ({items, current}: Props = mock) {
export function ProgressBar ({items, current}: Props) {

  return (
    <div className={styles.bar}>
      {items.map((el, i) => {
        const itemStyle = current && i < current ? styles[`bar__item_${el.level}`] : styles.bar__item_default; 
        return <div key={i} className={cn(styles.bar__item, itemStyle)} />})}
    </div>
  )
}