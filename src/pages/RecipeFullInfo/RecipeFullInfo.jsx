//* react-hooks
import { useEffect } from "react";

//* react-router
import { useParams } from "react-router-dom";

//* redux
import { useDispatch, useSelector } from "react-redux";

//* redux-toolkit
import { nanoid } from "@reduxjs/toolkit";

//* components-UI
import LoadingSpinner from "../../components/ui/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";

//* recipe-feature-components
import RecipeFullInfoTag from "../../features/Recipe/RecipeFullInfoTag/RecipeFullInfoTag";

//* services
import { fetchSpecificRecipe } from "../../services/apiGetRecipes";

//* styles
import styles from "./RecipeFullInfo.module.css";

function RecipeFullInfo() {
  const recipeFullInfo = useSelector((state) => state.recipe.RecipeFullInfo);
  const status = useSelector((state) => state.recipe.status);
  const error = useSelector((state) => state.recipe.error);

  const dispatch = useDispatch();
  const { recipeID } = useParams();

  const recipeToArray =
    recipeFullInfo.id &&
    Object.entries(recipeFullInfo).map((infoTag) => {
      return { tag: infoTag[0], info: infoTag[1] };
    });

  useEffect(() => {
    dispatch(fetchSpecificRecipe(recipeID));
  }, [dispatch, recipeID]);

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
            <h2>{recipeFullInfo.label}</h2>
            <div className={styles.image_container}>
              <img src={recipeFullInfo.image} alt="Food" />
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
