//* styles
import styles from "./Ingredient.module.css";

function Ingredient({ ingredient }) {
  return (
    <div className={styles.container}>
      <strong>Name :</strong>
      <p>
        {ingredient.name} <strong>.</strong>
      </p>
      <strong>Amount :</strong>
      <p>
        {ingredient.amount} <strong>.</strong>
      </p>
    </div>
  );
}

export default Ingredient;
