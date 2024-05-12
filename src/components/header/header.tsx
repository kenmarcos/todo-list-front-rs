import rocketImage from "../../assets/rocket.svg";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={rocketImage} alt="Desenho de foguete" />
        <h1>
          <span>to</span>
          <span>do</span>
        </h1>
      </div>
    </header>
  );
};
