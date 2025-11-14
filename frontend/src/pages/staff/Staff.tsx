import { Link } from "react-router-dom";
import styles from "./staff.module.css";

export const Staff = () => {
  return (
    <div className={styles.staff}>
      <h2>Сотрудники</h2>
      <Link to="/">Назад</Link>
    </div>
  );
};
