import { useEffect, useRef } from "react";
import styles from "./comet.module.css";

export const Comet = () => {
  const cometRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cometRef.current) {
        const comet = cometRef.current;
        // Плавное движение кометы к курсору
        comet.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={cometRef} className={styles.comet} />;
};
