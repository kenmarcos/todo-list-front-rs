import { PlusCircle } from "@phosphor-icons/react";
import styles from "./create-task.module.css";

interface CreateTaskProps {
  newTask: string;
  onWriteNewTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCreateTask: () => void;
}

export const CreateTask = ({
  newTask,
  onWriteNewTask,
  onCreateTask,
}: CreateTaskProps) => {
  const handleWriteNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    onWriteNewTask(event);
  };

  const handleCreateTask = () => {
    onCreateTask();
  };

  return (
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
  );
};
