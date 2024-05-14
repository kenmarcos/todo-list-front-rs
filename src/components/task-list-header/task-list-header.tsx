import styles from "./task-list-header.module.css";

interface TaskListHeaderProps {
  totalTasksCount: number;
  completedTasksCount: number;
}

export const TaskListHeader = ({
  totalTasksCount,
  completedTasksCount,
}: TaskListHeaderProps) => {
  return (
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
  );
};
