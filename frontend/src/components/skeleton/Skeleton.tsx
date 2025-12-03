import styles from "./Skeleton.module.css";

export const Skeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.photo}></div>
        <div className={styles.textShort}></div>
        <div className={styles.textLong}></div>
      </div>

      <div className={styles.right}>
        <div className={styles.line}></div>
        <div className={styles.lineSmall}></div>
        <div className={styles.line}></div>

        <div className={styles.subtitle}></div>

        <div className={styles.expBlock}>
          <div className={styles.expLine}></div>
          <div className={styles.expLine}></div>
          <div className={styles.expLine}></div>
        </div>
      </div>
    </div>
  );
};
