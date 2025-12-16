import styles from "./stack.module.css";

const categories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "UI", "SPA", "SSR"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST", "Auth", "API"],
  },
  {
    title: "Design",
    items: ["UI/UX", "Figma", "Branding", "Motion", "Icons", "Layouts"],
  },
];

export const Stack = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className={styles.wrapper}>
      <h2 data-aos="fade-down" className={styles.title}>
        Технологии которые мы применяем
      </h2>

      <div data-aos="fade-up" className={styles.categories}>
        {categories.map((cat, i) => (
          <div key={i}>
            <h3 className={styles.categoryTitle}>{cat.title}</h3>

            <div className={styles.skillsGrid}>
              {cat.items.map((item, j) => (
                <div
                  key={j}
                  className={styles.skill}
                  onMouseMove={handleMouseMove}
                >
                  <span className={styles.icon} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
