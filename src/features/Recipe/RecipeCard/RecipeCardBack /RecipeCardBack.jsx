//* react-router
import { Link, useLocation } from "react-router-dom";

//* components-UI
import Button from "../../../../components/ui/Button/Button";

//* components-recipe-feature
import LikeButton from "../../LikeButton/LikeButton";
import ArrowSlideButton from "../../ArrowSlideButton/ArrowSlideButton";

//* styles
import styles from "../RecipeCard.module.css";

function RecipeCardBack({ recipe }) {
  const { label, calories, cuisineType, dishType, ingredients, mealType, id } =
    recipe;

  // const {
  //   user: { uid },
  // } = useSelector((state) => state.user);
  // const { isLiking } = useSelector((state) => state.recipe);

  // const { documents: likedRecipes } = useACollection("likedRecipes");
  // const matchedRecipe = likedRecipes.find((document) => document.id === id);

  const location = useLocation();

  return (
    <div className={styles.back}>
      {location.pathname === "/recipes/liked-recipes" ? (
        <ArrowSlideButton recipe={recipe} />
      ) : (
        <LikeButton recipe={recipe} />
      )}

      <section className={styles.text_container}>
        <h4>{label}</h4>
        <p>{cuisineType} cuisine</p>
        <p>{dishType?.length > 0 ? dishType[0] : dishType}</p>
        <p>{mealType}</p>
        {ingredients?.length > 0 && <p>{ingredients?.length} Ingredients</p>}
        <p>{Math.round(calories)} Calories</p>
      </section>

      <Link to={id}>
        <Button className={styles.view_full_recipe_button} type="blue-hollow">
          View full recipe
        </Button>
      </Link>
    </div>
  );
}

export default RecipeCardBack;
