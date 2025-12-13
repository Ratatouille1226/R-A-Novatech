import website from "../../../../assets/website.png";
import styles from "./WhatServices.module.css";

const services = [
  {
    title: "Web-разработка",
    text: "Разработка сайтов и приложений любой сложности.",
    img: website,
  },
  {
    title: "Дизайн и UX/UI",
    text: "Создаём интерфейсы, которые вовлекают с первого клика.",
    img: website,
  },
  {
    title: "Брендинг и айдентика",
    text: "Логотипы, гайдлайны и визуальная идентичность.",
    img: website,
  },
  {
    title: "Поддержка и оптимизация",
    text: "Тестирование, улучшение и поддержка проектов.",
    img: website,
  },
];

export const WhatServices = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className={styles.services__container}>
      <h2 className={styles.title}>Мы предоставляем</h2>

      <div className={styles.services}>
        {services.map((item, i) => (
          <div key={i} className={styles.service} onMouseMove={handleMouseMove}>
            <img src={website} alt="websites" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
