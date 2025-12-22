import { useEffect, useState } from "react";
import styles from "./modal.module.css";

export const Modal = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={() => setVisible(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>
          Горящее предложение для новых клиентов!
        </h2>

        <p className={styles.discount}>
          <span className={styles.percent}>–45%</span> на разработку
        </p>

        <p className={styles.text}>
          Только сейчас действует ограниченная акция на создание интерфейсов,
          сайтов, дизайна и приложений. Успейте заказать разработку с большой
          скидкой!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => setVisible(false)}>
            Заказать
          </button>
          <button className={styles.button} onClick={() => setVisible(false)}>
            Похуй
          </button>
        </div>
      </div>
    </div>
  );
};
