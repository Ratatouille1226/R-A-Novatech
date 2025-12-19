import {
  MainVideo,
  AboutUs,
  WhatServices,
  Stack,
  Reviews,
  Contact,
  WorksExample,
} from "./components";
import styles from "./main.module.css";
import { useTranslation } from "react-i18next";

export const Main = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.main}>
      <MainVideo />

      <div className={styles.content}>
        <h1 data-aos="fade-right">{t("title_main")}</h1>
        <p data-aos="fade-left">{t("descr_main")}</p>
        <button data-aos="fade-up">{t("button")}</button>

        <AboutUs />
        <WhatServices />
        <WorksExample />
        <Stack />
        <Contact />
        <Reviews />
      </div>
    </section>
  );
};
