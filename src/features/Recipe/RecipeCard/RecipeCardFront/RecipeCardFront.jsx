//* styles
import styles from "../RecipeCard.module.css";

function RecipeCardFront({ image, label }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={styles.front}>
      <div className={styles.cover}>
        <p className={styles.text}>{label}</p>
      </div>
    </div>
  );
}

export default RecipeCardFront;
