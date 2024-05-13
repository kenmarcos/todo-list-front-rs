import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/header/header";
import clipboard from "./assets/clipboard.svg";

import styles from "./app.module.css";
import { Task } from "./components/task/task";

function App() {
  return (
    <>
      <Header />

      <main>
        <div className={styles.newTask}>
          <input
            className={styles.newTaskInput}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />

          <button className={styles.newTaskButton}>
            Criar
            <PlusCircle size={16} />
          </button>
        </div>

        <div className={styles.tasks}>
          <header>
            <div className={styles.count}>
              <p className={styles.createdTasks}>Tarefas criadas</p>

              <span>0</span>
            </div>

            <div className={styles.count}>
              <p className={styles.completedTasks}>Concluídas</p>

              <span>0</span>
            </div>
          </header>

          <div className={styles.taskList}>
            <Task />
            <Task />

            <div className={styles.noTask}>
              <div className={styles.noTaskContent}>
                <img src={clipboard} alt="Desenho de prancheta" />

                <div className={styles.noTaskText}>
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
