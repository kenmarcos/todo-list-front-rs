import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/header/header";
import clipboard from "./assets/clipboard.svg";
import { v4 as uuidv4 } from "uuid";
import styles from "./app.module.css";
import { Task } from "./components/task/task";
import { useState } from "react";
import { ITask } from "./types/tasks";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>(() =>
    JSON.parse(localStorage.getItem("@ToDoList:taskList") || "[]")
  );
  const [newTask, setNewTask] = useState("");

  const handleWriteNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleCreateTask = () => {
    const newTaskList = [
      ...taskList,
      {
        id: uuidv4(),
        description: newTask,
        isCompleted: false,
      },
    ];

    localStorage.setItem("@ToDoList:taskList", JSON.stringify(newTaskList));

    setTaskList(newTaskList);

    setNewTask("");
  };

  const completeTask = (id: string, isChecked: boolean) => {
    const task = taskList.find((task) => task.id === id);

    if (!task) {
      return;
    }

    const taskUpdated = {
      ...task,
      isCompleted: isChecked,
    };

    const taskListUpdated = taskList.map((task) => {
      if (task.id === id) {
        return taskUpdated;
      }

      return task;
    });

    localStorage.setItem("@ToDoList:taskList", JSON.stringify(taskListUpdated));

    setTaskList(taskListUpdated);
  };

  const deleteTask = (id: string) => {
    const taskListUpdated = taskList.filter((task) => task.id !== id);

    localStorage.setItem("@ToDoList:taskList", JSON.stringify(taskListUpdated));

    setTaskList(taskListUpdated);
  };

  const totalTasksCount = taskList.length;

  const completedTasksCount = taskList.reduce((total, task) => {
    if (task.isCompleted) {
      return total + 1;
    }

    return total;
  }, 0);

  return (
    <>
      <Header />

      <main>
        <div className={styles.newTask}>
          <input
            className={styles.newTaskInput}
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleWriteNewTask}
          />

          <button className={styles.newTaskButton} onClick={handleCreateTask}>
            Criar
            <PlusCircle size={16} />
          </button>
        </div>

        <div className={styles.tasks}>
          <header>
            <div className={styles.count}>
              <p className={styles.createdTasks}>Tarefas criadas</p>

              <span>{totalTasksCount}</span>
            </div>

            <div className={styles.count}>
              <p className={styles.completedTasks}>Concluídas</p>

              <span>
                {completedTasksCount} de {totalTasksCount}
              </span>
            </div>
          </header>

          <div className={styles.taskList}>
            {taskList.map((task) => (
              <Task
                key={task.id}
                task={task}
                onCompleteTask={completeTask}
                onDeleteTask={deleteTask}
              />
            ))}

            {taskList.length === 0 && (
              <div className={styles.noTask}>
                <div className={styles.noTaskContent}>
                  <img src={clipboard} alt="Desenho de prancheta" />

                  <div className={styles.noTaskText}>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
