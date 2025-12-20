import { useNavigate } from "react-router-dom";
import styles from "./workMakeUp.module.css";

export const WorkMakeUp = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <section className={styles.sectionHeader}>
        <h1>
          Разработка сервиса <span>поиска авиабилетов</span>
        </h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          malesuada sapien.
        </p>

        <div className={styles.imagePlaceholderLarge} />
      </section>

      <button onClick={() => navigate(-1)}>Назад</button>

      {/* CLIENT */}
      <section className={styles.section}>
        <h2>Клиент</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          posuere, leo nec commodo convallis, ipsum urna vestibulum massa, at
          interdum mauris urna sit amet arcu. Etiam consectetur, nisl sed
          laoreet fermentum, odio lectus pulvinar turpis, non dictum orci lorem
          non purus.
        </p>
      </section>

      {/* CHALLENGES */}
      <section className={styles.section}>
        <h2>Вызовы</h2>
        <ul className={styles.list}>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section className={styles.section}>
        <h2>Как мы решили задачу</h2>

        <div className={styles.gridTwo}>
          <div>
            <h3>1. Объединили источники данных</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              efficitur risus at nisl fringilla, vitae consequat massa dictum.
              Curabitur rutrum ex sed arcu fermentum, ac fringilla elit
              imperdiet.
            </p>
          </div>
          <div className={styles.imagePlaceholder} />
        </div>

        <div className={styles.gridTwo}>
          <div>
            <h3>2. Разработали удобный интерфейс</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              nec augue sed dolor volutpat gravida. Suspendisse potenti. Nulla
              facilisi. Vivamus pretium, justo ac tincidunt elementum, mauris
              erat tristique odio.
            </p>
          </div>
          <div className={styles.imagePlaceholder} />
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className={styles.section}>
        <h2>Технологии</h2>

        <div className={styles.techGrid}>
          <span>React</span>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>REST API</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
      </section>

      {/* RESULT */}
      <section className={styles.section}>
        <h2>Результат</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          potenti. Aliquam a bibendum lectus, id posuere neque. Vivamus nec
          bibendum felis, vel laoreet leo.
        </p>

        <div className={styles.imagePlaceholderLarge} />
      </section>
    </div>
  );
};
