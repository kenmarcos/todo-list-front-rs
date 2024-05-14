import { Header } from "./components/header/header";
import { v4 as uuidv4 } from "uuid";
import styles from "./app.module.css";
import { Task } from "./components/task/task";
import { useState } from "react";
import { ITask } from "./types/tasks";
import { EmptyTaskList } from "./components/empty-task-list/empty-task-list";
import { TaskListHeader } from "./components/task-list-header/task-list-header";
import { CreateTask } from "./components/create-task/create-task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>(() =>
    JSON.parse(localStorage.getItem("@ToDoList:taskList") || "[]")
  );
  const [newTask, setNewTask] = useState("");

  const writeNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const createTask = () => {
    if (!newTask) return;

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
    const taskListUpdated = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: isChecked,
        };
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
        <CreateTask
          newTask={newTask}
          onWriteNewTask={writeNewTask}
          onCreateTask={createTask}
        />

        <div className={styles.tasks}>
          <TaskListHeader
            totalTasksCount={totalTasksCount}
            completedTasksCount={completedTasksCount}
          />

          <div className={styles.taskList}>
            {taskList.map((task) => (
              <Task
                key={task.id}
                task={task}
                onCompleteTask={completeTask}
                onDeleteTask={deleteTask}
              />
            ))}

            {taskList.length === 0 && <EmptyTaskList />}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
