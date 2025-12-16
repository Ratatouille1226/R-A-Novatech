import { useState, useRef, useEffect } from "react";
import styles from "./reviews.module.css";

const SECRET_CODE = "HUI"; // ← потом можно вынести в env

const reviews = [
  {
    name: "Алексей",
    text: "Команда быстро и качественно реализовала проект. Отличная коммуникация и внимание к деталям!",
  },
  {
    name: "Мария",
    text: "Очень довольна дизайном! Всё современно, аккуратно и со вкусом.",
  },
  {
    name: "Дмитрий",
    text: "Сайт работает быстро, адаптивно и выглядит шикарно. Настоящие профессионалы.",
  },
  {
    name: "Ольга",
    text: "Команда не просто сделала сайт — они помогли улучшить продукт. Рекомендую!",
  },
];

export const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [code, setCode] = useState("");
  const [hintOpen, setHintOpen] = useState(false);

  const hintRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  const isValidCode = code === SECRET_CODE;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hintRef.current && !hintRef.current.contains(event.target as Node)) {
        setHintOpen(false);
      }
    };

    if (hintOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hintOpen]);

  return (
    <div className={styles.wrapper}>
      {/* ФОРМА */}
      <div data-aos="fade-right" className={styles.formBlock}>
        <h2 className={styles.title}>Оставьте отзыв</h2>

        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Ваше имя" />
          <input className={styles.input} type="text" placeholder="Ваш отзыв" />

          {/* Кодовое слово */}
          <div className={styles.codeField} ref={hintRef}>
            <input
              className={styles.input}
              type="text"
              placeholder="Кодовое слово"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <button
              type="button"
              className={styles.hintIcon}
              onClick={() => setHintOpen((v) => !v)}
            >
              ?
            </button>

            {hintOpen && (
              <div className={styles.hint}>
                Оставить отзыв могут только клиенты, которые сотрудничали с
                нами. Кодовое слово Вы получаете в конце работы.
              </div>
            )}
          </div>

          <button className={styles.button} disabled={!isValidCode}>
            Отправить
          </button>
        </form>
      </div>

      {/* ОТЗЫВЫ */}
      <div data-aos="fade-left" className={styles.reviewsBlock}>
        <div className={styles.slider}>
          <button className={styles.arrow} onClick={prev}>
            ‹
          </button>

          <div className={styles.card}>
            <h3 className={styles.name}>{reviews[index].name}</h3>
            <p className={styles.text}>{reviews[index].text}</p>
          </div>

          <button className={styles.arrow} onClick={next}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
