import { Trash } from "phosphor-react"

import styles from "./styles.module.css"

type Task = {
  id: string
  title: string
  isCompleted: boolean
}

type TaskProps = {
  task: Task
  onCompleteTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
  const isTaskCompleted = task.isCompleted
    ? styles.isCompletedTask
    : styles.notCompletedTask

  function handleCompleteTask() {
    onCompleteTask(task.id)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <>
      <div className={styles.task}>
        <div className={styles.taskChecked}>
          <input
            type="checkbox"
            id={task.id}
            checked={task.isCompleted}
            onChange={handleCompleteTask}
          />
          <label htmlFor={`${task.id}`}></label>

          <p className={isTaskCompleted}>{task.title}</p>
        </div>

        <button type="button" title="Delete Task" onClick={handleDeleteTask}>
          <Trash size={24} />
        </button>
      </div>
    </>
  )
}
