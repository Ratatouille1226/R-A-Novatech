import styles from "./aboutUs.module.css";
import staff from "../../assets/employees.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.about}>
      <div className={styles.about__us}>
        <h2>{t("about_us")}</h2>
        <p>{t("about_us_descr")}</p>
        <Link className={styles.link__staff} to="/staff">
          {t("staff")}
        </Link>
      </div>
      <img src={staff} alt="Сотрудники" className={styles.about__photo} />
    </div>
  );
};
