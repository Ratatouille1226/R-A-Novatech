import { Link } from "react-router-dom";
import image from "../../assets/notFoundImg.png";
import styles from "./notFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.not__found}>
      <img src={image}></img>
      <div className={styles.descr}>
        <h2>ОКАК</h2>
        <h3>Страницы не существует</h3>
        <Link to="/">На главную</Link>
      </div>
    </div>
  );
};
