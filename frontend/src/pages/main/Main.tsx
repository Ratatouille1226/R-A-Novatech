import { Typewriter } from "react-simple-typewriter";
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
        <h1>
          {t("title_main")}{" "}
          <span style={{ color: "#6e7bff" }}>
            <Typewriter
              words={t("title_main_words", { returnObjects: true }) as string[]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={70}
              delaySpeed={1200}
            />
          </span>
        </h1>
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
