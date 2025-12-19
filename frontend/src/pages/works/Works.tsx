import styles from "./works.module.css";
import { useNavigate } from "react-router-dom";

export const Works = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>Тут будут работы</h2>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};
