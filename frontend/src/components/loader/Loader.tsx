import loader from "../../assets/loading.svg";
import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <img src={loader} alt="Loading..." className={styles.loader} />
    </div>
  );
};
