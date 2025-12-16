import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div data-aos="zoom-in" className={styles.wrapper}>
      <h3>Остались вопросы?</h3>
      <span>Получите бесплатную консультацию</span>
      <button>Получить</button>
    </div>
  );
};
