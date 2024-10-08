import styles from "./Question.module.scss";

type Props = {
  value: string[];
  setValue: (v: any)=>void;
}

export const BriefQuestion = ({value = [""], setValue}: Props) => {
  return (
    <div className={styles.answerWrapper}>
      <input className={styles.textInput} name="text" value={value[0] ?? "" } onChange={(e)=>setValue([e.target.value])} />
    </div>
  )
}