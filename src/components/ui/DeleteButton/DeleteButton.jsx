//* styles
import styles from "./DeleteButton.module.css";

//? Didn't add the <Button/> component here since the styling is very different to this component's styling.

function DeleteButton({ onClick, className }) {
  return (
    <button
      className={`${styles.delete_button} ${className}`}
      onClick={onClick}
    >
      <div className={styles.image}></div>
    </button>
  );
}

export default DeleteButton;
