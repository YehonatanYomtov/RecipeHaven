//* styles
import styles from "./Section_1.module.css";

function WelcomeSection() {
  return (
    <div className={styles.section_1_main_container}>
      <h1>Welcome!</h1>

      <img
        className={styles.kitchen_back}
        src="/images/backgrounds/Kitchen_section-1-bg.png"
        alt="Kitchen"
      />
      <img className={styles.plant_1} src="/images/Plant_1.png" alt="plant" />
      <img
        className={styles.plant_2}
        src="/images/animated/Plant_2.png"
        alt="plant"
      />
      <img
        className={styles.kitchen_floor}
        src="/images/backgrounds/Kitchen-floor_section-1-bg.png"
        alt="Kitchen"
      />

      <div className={styles.cover}></div>
    </div>
  );
}

export default WelcomeSection;
