import { useState } from "react";
import styles from "./timer.module.scss";
import { useEffect } from "react";
import { timeConverter } from "../../helpers/time-converter";

type Props = {
  timeLeft: number;
  onTick: (t: number) => void;
  onEnd: () => void;
  isOn: boolean;
};

export function Timer({ timeLeft, onTick, isOn, onEnd }: Props) {
  const [isTimeElapsed, setIsTimeElapsed] = useState(false);

  useEffect(() => {
    if (timeLeft < 0) {
      setIsTimeElapsed(true);
      onTick(0);
    } else {
      if (isOn) {
        let timer = setTimeout(() => {
          onTick(timeLeft - 1);
          clearTimeout(timer);
        }, 1000);
      }
    }
  }, [timeLeft, isOn, onTick]);

  useEffect(() => {
    isTimeElapsed && onEnd();
  }, [isTimeElapsed, onEnd]);

  return (
    <div className={styles.timer}>
      <span className={styles.timer__time}>{timeConverter(timeLeft)}</span>
    </div>
  );
}
