import { Trash, Check } from "@phosphor-icons/react";
import styles from "./task.module.css";
import { useState } from "react";

export const Task = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleTaskToggle = () => {
    setIsChecked(!isChecked);
  };

  const checkboxCheckedClassname = isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];

  const paragraphCheckedClassname = isChecked
    ? styles["description-checked"]
    : "";

  return (
    <div className={styles.task}>
      <div className={styles.checkboxContainer}>
        <input readOnly type="checkbox" checked={isChecked} />
        <span
          onClick={handleTaskToggle}
          className={`${styles.checkbox} ${checkboxCheckedClassname}`}
        >
          {isChecked && <Check size={12} />}
        </span>
      </div>

      <div>
        <p className={`${styles.description} ${paragraphCheckedClassname}`}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </div>

      <div>
        <button className={styles.deleteButton}>
          <Trash />
        </button>
      </div>
    </div>
  );
};
