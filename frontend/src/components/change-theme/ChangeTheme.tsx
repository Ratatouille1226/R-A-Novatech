import { forwardRef } from "react";
import styles from "./changeTheme.module.css";

export const ChangeTheme = forwardRef<
  HTMLDivElement,
  { isActiveChangeColor: boolean }
>(({ isActiveChangeColor }, ref) => {
  const changeColor = (color: string) => {
    document.documentElement.className = `theme-${color}`;
  };

  return (
    <div
      ref={ref}
      className={`${styles.container} ${
        isActiveChangeColor ? styles.active : ""
      }`}
    >
      <div onClick={() => changeColor("blue")} className={styles.blue}></div>
      <div onClick={() => changeColor("red")} className={styles.red}></div>
      <div onClick={() => changeColor("green")} className={styles.green}></div>
      <div
        onClick={() => changeColor("violet")}
        className={styles.violet}
      ></div>
    </div>
  );
});
