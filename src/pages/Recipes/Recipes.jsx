//* react-router
import { Link } from "react-router-dom";

//* styles
import styles from "./Recipes.module.css";

function Recipes() {
  return (
    <div className={styles.container}>
      <Link className={styles.left_button} to="/recipes/new">
        <p>Create new recipe</p>
      </Link>

      <Link className={styles.right_button} to="/recipes/liked-recipes">
        <p> View my recipes</p>
      </Link>
    </div>
  );
}

export default Recipes;
