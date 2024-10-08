export const timeConverter = (value: number) => {
  const hours = Math.floor(value/(3600))
  const mins = Math.floor((value - hours * 3600)/(60))
  const seconds = Math.round((value - hours * 3600 - mins * 60))
  return hours 
    ? `${hours < 10 ? "0"+hours : hours} : ${mins < 10 ? "0"+mins : mins} : ${seconds<10 ? "0"+seconds : seconds}`
    : `${mins < 10 ? "0"+mins : mins} : ${seconds<10 ? "0"+seconds : seconds}`
}
