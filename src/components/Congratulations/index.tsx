import { CircleWavyCheck } from "phosphor-react"
import styles from "./styles.module.css"

export function Congratulations() {
  return (
    <div className={styles.container}>
      <CircleWavyCheck size={64} color={"#4BF21C"} />
      <strong>Congratulations!</strong>
      <p>You have completed all your tasks</p>
    </div>
  )
}
