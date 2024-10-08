import React, {useState, useEffect} from "react"

export function useTimer(duration: number, isOn: boolean) {
  const durationInMilliseconds = duration * 1000 * 60;
  const [timeLeft, setTimeLeft] = useState(durationInMilliseconds);
  const [isTimeElapsed, setIsTimeElapsed] = useState(false);

    useEffect(()=>{
    let left = durationInMilliseconds;

    let timer: any;
    if(isOn) {
      const start = Date.now();
      timer = setInterval(()=>{
        left =  durationInMilliseconds - (Date.now() - start);
        setTimeLeft(left);
        if (left<=0) {
          setTimeLeft(0);
          setIsTimeElapsed(true);
          clearInterval(timer);
        }
      }, 1000);
    }
    return ()=>clearInterval(timer);
    }, [isOn])

  return {left: timeLeft, isTimeElapsed};
}