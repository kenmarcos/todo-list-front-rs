import { Trash, Check } from "@phosphor-icons/react";
import styles from "./task.module.css";
import { useState } from "react";
import { ITask } from "../../types/tasks";

interface TaskProps {
  task: ITask;
  onCompleteTask: (id: string, isChecked: boolean) => void;
  onDeleteTask: (id: string) => void;
}

export const Task = ({ task, onCompleteTask, onDeleteTask }: TaskProps) => {
  const [isChecked, setIsChecked] = useState(task.isCompleted);

  const handleTaskToggle = () => {
    setIsChecked(!isChecked);

    onCompleteTask(task.id, !isChecked);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const checkboxCheckedClassname = isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];

  const paragraphCheckedClassname = isChecked
    ? styles["description-checked"]
    : "";

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <div className={styles.checkboxContainer}>
          <input readOnly type="checkbox" checked={isChecked} />
          <span
            onClick={handleTaskToggle}
            className={`${styles.checkbox} ${checkboxCheckedClassname}`}
          >
            {isChecked && <Check size={12} />}
          </span>
        </div>

        <div className={styles.descriptionContainer}>
          <p className={`${styles.description} ${paragraphCheckedClassname}`}>
            {task.description}
          </p>
        </div>
      </div>

      <div>
        <button className={styles.deleteButton} onClick={handleDeleteTask}>
          <Trash />
        </button>
      </div>
    </div>
  );
};
