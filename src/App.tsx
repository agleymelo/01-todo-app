import { ChangeEvent, FormEvent, useState } from "react"
import { v4 as uuid } from "uuid"
import { Congratulations } from "./components/Congratulations"
import { EmptyTask } from "./components/EmptyTask"

import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Task } from "./components/Task"

import styles from "./styles/app.module.css"

type Task = {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const [inputTextNewTask, setInputTextNewTask] = useState("")

  const isTasksEmpty = tasks?.length === 0 ?? undefined

  const countAllTaskCompleted = tasks.reduce((acc, item) => {
    if (item.isCompleted) {
      acc++
    }

    return acc
  }, 0)

  function changeCompleteTask(id: string) {
    const editTask = tasks.map((task) => {
      if (task.id === id) {
        if (task.isCompleted) {
          return task
        }

        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task
    })

    setTasks(editTask)
  }

  function changeDeleteTask(TaskToDeleteId: string) {
    const taskWithoutDeleteOne = tasks.filter(
      (task) => task.id !== TaskToDeleteId
    )

    setTasks(taskWithoutDeleteOne)
  }

  function changeTextInputNewTask(event: ChangeEvent<HTMLInputElement>) {
    setInputTextNewTask(event.target.value)
  }

  function createNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: uuid(),
      title: inputTextNewTask,
      isCompleted: false,
    }

    setTasks((state) => [...state, newTask])
    setInputTextNewTask("")
  }

  return (
    <div className="App">
      <Header />

      <Input
        inputText={inputTextNewTask}
        onChangeTextInputNewTask={changeTextInputNewTask}
        onCreateNewTask={createNewTask}
      />

      <main>
        <div className={styles.infoTasks}>
          <strong className={styles.createdTask}>
            Created tasks <span>{tasks.length ?? "0"}</span>
          </strong>
          <strong className={styles.completedTask}>
            Completed{" "}
            <span>
              {countAllTaskCompleted} from {tasks.length}
            </span>
          </strong>
        </div>

        {isTasksEmpty && <EmptyTask />}

        {tasks.length > 0 &&
          tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              onCompleteTask={changeCompleteTask}
              onDeleteTask={changeDeleteTask}
            />
          ))}

        {countAllTaskCompleted == tasks.length && countAllTaskCompleted > 0 ? (
          <Congratulations />
        ) : undefined}
      </main>
    </div>
  )
}
