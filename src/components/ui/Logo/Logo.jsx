//* styles
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/images/Logo.png" alt="Logo" />
      <p className={styles.text}>FoodHaven</p>
    </div>
  );
}

export default Logo;
