import React, { useState, type MouseEvent } from "react";
import styles from "./works.module.css";
import { Link } from "react-router-dom";

export const WorksExample: React.FC = () => {
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

  return (
    <section
      data-aos="zoom-in"
      className={styles.portfolioCTA}
      onMouseMove={handleMouseMove}
      style={
        { "--x": `${coords.x}%`, "--y": `${coords.y}%` } as React.CSSProperties
      }
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          Вы можете ознакомиться с нашими работами здесь
        </h2>
        <p className={styles.subtitle}>
          Ознакомьтесь с проектами, которые мы реализовали для наших клиентов,
          чтобы понять наш подход и качество работы.
        </p>
        <Link to="/works" className={styles.button}>
          Перейти к работам
        </Link>
      </div>
    </section>
  );
};
