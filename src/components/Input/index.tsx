import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent } from "react"

import styles from "./styles.module.css"

type InputProps = {
  inputText: string
  onChangeTextInputNewTask: (event: ChangeEvent<HTMLInputElement>) => void
  onCreateNewTask: (event: FormEvent) => void
}

export function Input({
  inputText,
  onChangeTextInputNewTask,
  onCreateNewTask,
}: InputProps) {
  return (
    <form onSubmit={onCreateNewTask} className={styles.container}>
      <input
        type="text"
        placeholder="Adiciona uma nova Tarefa"
        value={inputText}
        onChange={onChangeTextInputNewTask}
      />
      <button type="submit">
        Add <PlusCircle size={16} />
      </button>
    </form>
  )
}
