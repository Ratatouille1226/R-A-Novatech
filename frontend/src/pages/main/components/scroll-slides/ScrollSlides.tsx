import { useEffect, useRef, useState } from "react";
import styles from "./stack.module.css";

const slides = [
  { title: "Идея", text: "Мы продумываем концепцию" },
  { title: "Дизайн", text: "Создаём современный интерфейс" },
  { title: "Разработка", text: "Пишем чистый код" },
  { title: "Релиз", text: "Запускаем продукт" },
];

const SCROLL_LIMIT = 140;

export const ScrollSlides = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollSum = useRef(0);
  const isAnimating = useRef(false);

  const [index, setIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Лочим скролл, когда секция в зоне видимости
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setLocked(entry.isIntersecting);
        document.body.style.overflow = entry.isIntersecting ? "hidden" : "";
      },
      { threshold: 0.6 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Управление колесом
  useEffect(() => {
    if (!locked) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating.current) return;

      scrollSum.current += e.deltaY;

      if (scrollSum.current > SCROLL_LIMIT && index < slides.length - 1) {
        isAnimating.current = true;
        setDirection("next");
        setIndex((i) => i + 1);
        scrollSum.current = 0;

        setTimeout(() => (isAnimating.current = false), 800);
      }

      if (scrollSum.current < -SCROLL_LIMIT && index > 0) {
        isAnimating.current = true;
        setDirection("prev");
        setIndex((i) => i - 1);
        scrollSum.current = 0;

        setTimeout(() => (isAnimating.current = false), 800);
      }

      // Разлочить скролл в конце
      if (
        (index === slides.length - 1 && scrollSum.current > SCROLL_LIMIT) ||
        (index === 0 && scrollSum.current < -SCROLL_LIMIT)
      ) {
        document.body.style.overflow = "";
        setLocked(false);
        scrollSum.current = 0;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [locked, index]);

  return (
    <section ref={sectionRef} className={styles.section}>
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.slide} ${
            i === index
              ? styles.active
              : direction === "next"
                ? styles.prev
                : styles.next
          }`}
        >
          <div className={styles.card}>
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
