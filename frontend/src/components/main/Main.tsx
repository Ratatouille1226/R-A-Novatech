import { MainVideo } from "./components";
import styles from "./main.module.css";

export const Main = () => {
  return (
    <section className={styles.main}>
      <MainVideo />

      <div className={styles.content}>
        <h1>Превращаем идеи в качественные интерфейсы</h1>
        <p>
          Каждый наш проект — это баланс формы, функции и смысла. Мы создаём
          продукты, которые говорят сами за себя
        </p>
        <button>Связаться</button>
      </div>
    </section>
  );
};
