import { MainVideo } from "./components";
import styles from "./main.module.css";
import { useTranslation } from "react-i18next";

export const Main = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.main}>
      <MainVideo />

      <div className={styles.content}>
        <h1>{t("title_main")}</h1>
        <p>{t("descr_main")}</p>
        <button>{t("button")}</button>
      </div>
    </section>
  );
};
