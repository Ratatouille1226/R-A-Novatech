import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ЛЕВАЯ ЧАСТЬ */}
        <div className={styles.brand}>
          <h3 className={styles.logo}>R&A Novatech</h3>
          <p className={styles.description}>
            Мы создаём современные интерфейсы и цифровые продукты, которые
            работают быстро, выглядят эффектно и решают задачи бизнеса.
          </p>
        </div>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className={styles.contacts}>
          <span className={styles.label}>Связаться</span>
          <a href="mailto:info@ranovatech.com">info@ranovatech.com</a>
          <a href="tel:+79999999999">+7 (999) 999-99-99</a>
        </div>
      </div>

      {/* НИЖНЯЯ ПОЛОСА */}
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} R&A Novatech</span>
        <span className={styles.right}>All rights reserved</span>
      </div>
    </footer>
  );
};
