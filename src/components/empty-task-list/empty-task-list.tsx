import clipboard from "../../assets/clipboard.svg";

import styles from "./empty-task-list.module.css";

export const EmptyTaskList = () => {
  return (
    <div className={styles.noTask}>
      <div className={styles.noTaskContent}>
        <img src={clipboard} alt="Desenho de prancheta" />

        <div className={styles.noTaskText}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  );
};
