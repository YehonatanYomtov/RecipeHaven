//* react-hooks
import { useEffect, useMemo } from "react";

//* react-router
import { useLocation, useParams } from "react-router-dom";

//* redux
import { useDispatch, useSelector } from "react-redux";

//* redux-toolkit
import { nanoid } from "@reduxjs/toolkit";

//* components-UI
import LoadingSpinner from "../../components/ui/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";

//* recipe-feature-components
import RecipeFullInfoTag from "../../features/Recipe/RecipeFullInfoTag/RecipeFullInfoTag";

//* recipe-slice
import { getLikedRecipeCollection } from "../../features/Recipe/recipeSlice";

//* services
import { fetchSpecificRecipe } from "../../services/apiGetRecipes";

//* styles
import styles from "./RecipeFullInfo.module.css";

function RecipeFullInfo() {
  const userId = useSelector((state) => state.user.user.uid);
  const likedRecipes = useSelector((state) => state.recipe.likedRecipes);
  const recipeFullInfo = useSelector((state) => state.recipe.recipeFullInfo);
  const status = useSelector((state) => state.recipe.status);
  const error = useSelector((state) => state.recipe.error);

  const dispatch = useDispatch();
  const { recipeID } = useParams();
  const { pathname } = useLocation();

  const isLiked = useMemo(() => pathname.includes("liked-recipes"), [pathname]);

  const recipe = useMemo(() => {
    if (!isLiked) return recipeFullInfo;
    return likedRecipes.find((recipe) => recipe.id === recipeID);
  }, [isLiked, recipeFullInfo, likedRecipes, recipeID]);

  const recipeToArray = useMemo(
    () =>
      recipe?.id &&
      Object.entries(recipe).map((infoTag) => {
        return { tag: infoTag[0], info: infoTag[1] };
      }),
    [recipe]
  );

  useEffect(() => {
    if (!isLiked) dispatch(fetchSpecificRecipe(recipeID));
    else if (!likedRecipes.length) dispatch(getLikedRecipeCollection(userId));
  }, [isLiked, dispatch, userId, recipeID, likedRecipes]);

  return (
    <div className={styles.main_container}>
      <img
        className={styles.main_container_image}
        src="/images/backgrounds/Recipe-full-info-bg.jpg"
        alt="bg"
      />

      {error && <ErrorMessage message={error} />}

      {status === "loading" && <LoadingSpinner />}

      {status === "succeeded" && !error && (
        <>
          <div className={styles.book_left_page}>
            <h2>{recipe.label}</h2>
            <div className={styles.image_container}>
              <img src={recipe.image} alt="Food" />
            </div>
          </div>

          <div className={styles.book_right_page}>
            {recipeToArray?.length > 0 &&
              recipeToArray.map((tag) => (
                <RecipeFullInfoTag infoTag={tag} key={nanoid()} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default RecipeFullInfo;
