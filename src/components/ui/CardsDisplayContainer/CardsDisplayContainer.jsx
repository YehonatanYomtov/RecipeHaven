//* react-router
import { useLocation } from "react-router-dom";

//* redux
import { useSelector } from "react-redux";

//* redux-toolkit
import { nanoid } from "@reduxjs/toolkit";

//* UI-components
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

//* recipe-feature-components
import RecipeCard from "../../../features/Recipe/RecipeCard/RecipeCard";
import SortButton from "../../../features/Recipe/SortButton/SortButton";

//* styles
import styles from "./CardsDisplayContainer.module.css";

function CardsDisplayContainer({ className, style, array, sortButton }) {
  const status = useSelector((state) => state.recipe.status);
  const error = useSelector((state) => state.recipe.error);

  const location = useLocation();
  const arrayFrom = location.pathname;

  return (
    <div className={styles.main_container} style={style}>
      <h1>{array.length > 0 && `Recipes (${array.length})`}</h1>

      {sortButton && array.length > 1 && (
        <SortButton arrayFrom={arrayFrom} array={array} options={sortButton} />
      )}

      <div className={`${styles.cards_display} ${className}`}>
        {error && <ErrorMessage message={error} />}

        {status === "loading" && <LoadingSpinner />}

        {(status === "succeeded" || status === "idle") && !error && (
          <>
            {array?.map((recipe) => (
              <RecipeCard recipe={recipe} key={nanoid()} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default CardsDisplayContainer;
