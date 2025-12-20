import styles from "./works.module.css";
import { Link, useNavigate } from "react-router-dom";

export const Works = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Link to="/makeup">первая работа</Link>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};
