//* styles

import styles from "./EditRecipe.module.css";
import { useParams } from "react-router-dom";
import { useACollection } from "../../../hooks/useACollection";
import { nanoid } from "@reduxjs/toolkit";

import Category from "../Category/Category";
import Button from "../../../components/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { submitRecipeChanges } from "../recipeSlice";

function EditRecipe() {
  const { documents: likedRecipes } = useACollection("likedRecipes");

  const { recipeID } = useParams();

  const match = likedRecipes.find((recipe) => recipe.id === recipeID);
  const recipeToEdit = match && Object.entries(match);

  const categories = useSelector((state) => state.recipe.categories);

  const newRecipe = recipeToEdit?.map((category) => {
    if (typeof category[1] !== "number" || typeof category[1] !== "string")
      return;

    const matching = categories.find((cat) => cat[0]);
    console.log("matching: ", matching);

    // if (category[0] === matching && category[1] !== matching) {
    // }

    // category.replace(category[1]);
  });

  const dispatch = useDispatch();

  let label = "";
  let value = "";

  // const newRecipe = {};

  function handleEditRecipeSubmit(e) {
    e.preventDefault();

    dispatch(submitRecipeChanges(newRecipe));
  }

  return (
    <form className={styles.main_container} onSubmit={handleEditRecipeSubmit}>
      {recipeToEdit?.map((category) => {
        label = category[0];

        if (
          typeof category[1] === "number" ||
          typeof category[1] === "string"
        ) {
          value = category[1];
        } else {
          return;
        }

        if (label !== "id" && label !== "uid" && label !== "dbId") {
          return <Category label={label} value={value} key={nanoid()} />;
        }
      })}

      <Button type="blue">Edit</Button>
    </form>
  );
}

export default EditRecipe;
