import { ClipboardText } from "phosphor-react"

import styles from "./styles.module.css"

export function EmptyTask() {
  return (
    <div className={styles.container}>
      <ClipboardText size={64} />

      <strong>You don't have any task listed yet</strong>
      <p>Create tasks above and organize your todo itens</p>
    </div>
  )
}
