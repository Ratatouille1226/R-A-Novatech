import styles from "./header.module.css";
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
      <button onClick={toggleLang}>{currentLang === "ru" ? "EN" : "RU"}</button>
    </header>
  );
};
