import { useEffect, useRef, useState } from "react";
import styles from "./stack.module.css";

const slides = [
  { title: "Идея", text: "Мы продумываем концепцию" },
  { title: "Дизайн", text: "Создаём современный интерфейс" },
  { title: "Разработка", text: "Пишем чистый код" },
  { title: "Релиз", text: "Запускаем продукт" },
];

const SCROLL_LIMIT = 140;
const SWIPE_LIMIT = 60;

export const ScrollSlides = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollSum = useRef(0);
  const startY = useRef<number | null>(null);
  const isAnimating = useRef(false);

  const [index, setIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Лочим страницу
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

  const goNext = () => {
    if (index < slides.length - 1) {
      setDirection("next");
      setIndex((i) => i + 1);
    } else unlock();
  };

  const goPrev = () => {
    if (index > 0) {
      setDirection("prev");
      setIndex((i) => i - 1);
    } else unlock();
  };

  const unlock = () => {
    document.body.style.overflow = "";
    setLocked(false);
  };

  // Desktop scroll
  useEffect(() => {
    if (!locked) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating.current) return;

      scrollSum.current += e.deltaY;

      if (scrollSum.current > SCROLL_LIMIT) {
        isAnimating.current = true;
        goNext();
        scrollSum.current = 0;
        setTimeout(() => (isAnimating.current = false), 800);
      }

      if (scrollSum.current < -SCROLL_LIMIT) {
        isAnimating.current = true;
        goPrev();
        scrollSum.current = 0;
        setTimeout(() => (isAnimating.current = false), 800);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [locked, index]);

  // Mobile swipe
  useEffect(() => {
    if (!locked) return;

    const onTouchStart = (e: TouchEvent) => {
      startY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (startY.current === null || isAnimating.current) return;

      const endY = e.changedTouches[0].clientY;
      const delta = startY.current - endY;

      if (Math.abs(delta) < SWIPE_LIMIT) return;

      isAnimating.current = true;

      if (delta > 0) goNext();
      else goPrev();

      startY.current = null;
      setTimeout(() => (isAnimating.current = false), 800);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
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
