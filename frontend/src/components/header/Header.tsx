import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { i18n } = useTranslation();
  //Определяем текущий язык
  const currentLang = i18n.language;
  //Функция смены языка
  const toggleLang = () => {
    const newLang = currentLang === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className={styles.header}>
      <h2>R&A Novatech</h2>
      <div className={styles.buttons}>
        <i>
          <FontAwesomeIcon icon={faGear} />
        </i>
        <button onClick={toggleLang}>
          {currentLang === "ru" ? "EN" : "RU"}
        </button>
      </div>
    </header>
  );
};
