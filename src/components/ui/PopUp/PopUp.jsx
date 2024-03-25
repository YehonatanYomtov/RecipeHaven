//* styles
import styles from "./PopUp.module.css";

function PopUp({ children }) {
  return (
    <div className={styles.popup_container}>
      <img src="/images/icons/Alert-icon.png" alt="Alert" />
      <span>{children}</span>
    </div>
  );
}

export default PopUp;
