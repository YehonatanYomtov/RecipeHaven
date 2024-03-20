//* recipe-feature-components
import RecipeCardFront from "./RecipeCardFront/RecipeCardFront";
import RecipeCardBack from "./RecipeCardBack /RecipeCardBack";

//* styles
import styles from "./RecipeCard.module.css";

function RecipeCard({ recipe }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <RecipeCardFront image={recipe.image} label={recipe.label} />

        <RecipeCardBack recipe={recipe} />
      </div>
    </div>
  );
}

export default RecipeCard;
