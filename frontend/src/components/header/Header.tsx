import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { ChangeTheme } from "../change-theme/ChangeTheme";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isActiveChangeColor, setIsActiveChangeColor] = useState(false); //Модальное окно смены цвета сайта
  const themeRef = useRef<HTMLDivElement | null>(null);
  const { i18n } = useTranslation();
  //Определяем текущий язык
  const currentLang = i18n.language;
  //Функция смены языка
  const toggleLang = () => {
    const newLang = currentLang === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
  };

  //Открытие/закрытие модального окна смены цвета сайта
  const toggleColor = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActiveChangeColor((prev) => !prev);
  };

  // закрытие по клику вне окна
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setIsActiveChangeColor(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <ChangeTheme ref={themeRef} isActiveChangeColor={isActiveChangeColor} />
      <h2>R&A Novatech</h2>
      <div className={styles.buttons}>
        <i>
          <FontAwesomeIcon onClick={toggleColor} icon={faGear} />
        </i>
        <button onClick={toggleLang}>
          {currentLang === "ru" ? "EN" : "RU"}
        </button>
      </div>
    </header>
  );
};
