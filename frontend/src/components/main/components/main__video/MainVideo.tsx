import mainVideo from "../../../../assets/light_flying_2.mov";
import styles from "./mainVideo.module.css";

export const MainVideo = () => {
  return (
    <>
      <video
        src={mainVideo}
        className={styles.main__video}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      {/* <div className={styles.hero__overlay}></div> */}
    </>
  );
};
