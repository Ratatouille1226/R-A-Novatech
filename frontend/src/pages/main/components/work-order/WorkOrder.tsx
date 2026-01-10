import React from "react";
import styles from "./workOrder.module.css";

export const WorkOrder: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Заполняем бриф",
      text: "Для определения особенностей товара и текущего результата",
    },
    {
      number: "2",
      title: "Согласовываем объем работ",
      text: "Чтобы повысить показатели кликабельности и продаж",
    },
    {
      number: "3",
      title: "Анализируем выдачу и сам товар",
      text: "Формируем гипотезы, прописываем конкурентные преимущества",
    },
    {
      number: "4",
      title: "Проводим тестирование",
      text: "Разрабатываем варианты и проводим совместное тестирование",
    },
    {
      number: "5",
      title: "Определяем лучший вариант",
      text: "И вместе с вами кайфуем от повышения показателей",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Порядок нашей работы в студии</h2>
      <p className={styles.subtitle}>
        Благодаря которому — вы получаете отличный результат
      </p>

      <div className={styles.flow}>
        {steps.map((step) => (
          <div key={step.number} className={styles.flowItem}>
            <div className={styles.number}>{step.number}</div>
            <div className={styles.cardTitle}>{step.title}</div>
            <div className={styles.cardText}>{step.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
