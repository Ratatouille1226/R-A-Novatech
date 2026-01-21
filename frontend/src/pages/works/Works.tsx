import styles from "./works.module.css";
import makeUpImg from "../../assets/сайтВизажиста.png";
import { Link } from "react-router-dom";

export const Works = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Наши работы</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={makeUpImg} alt="Сайт визажиста" />
          </div>

          <div className={styles.content}>
            <h3>Сайт визажиста</h3>
            <p>
              Портфолио-сайт, демонстрирующий стиль, экспертизу и реальные
              примеры работ специалиста.
            </p>

            <Link className={styles.link} to="/makeup">
              Смотреть проект
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={makeUpImg} alt="Сайт визажиста" />
          </div>

          <div className={styles.content}>
            <h3>Сайт визажиста</h3>
            <p>
              Минималистичный дизайн с акцентом на визуал и удобство клиента.
            </p>

            <Link className={styles.link} to="/makeup">
              Смотреть проект
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
