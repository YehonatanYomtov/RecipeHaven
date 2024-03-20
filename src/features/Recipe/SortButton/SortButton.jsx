//* react-hooks
import { useState } from "react";

//* redux-toolkit
import { nanoid } from "@reduxjs/toolkit";

//* recipe-featured-components
import { useDispatch } from "react-redux";

//* UI-components

//* recipe-slice
import {
  sortLikedRecipesByCalories,
  sortLikedRecipesByCreated,
  sortLikedRecipesByLiked,
  sortLikedRecipesByName,
  sortRecipesByCalories,
  sortRecipesByName,
} from "../recipeSlice";

//* utils
import { firstLetterToUpperCase } from "../../../utils/firstLetterToUpperCase";

//* styles
import styles from "./SortButton.module.css";

function SortButton({ arrayFrom, array, options }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  function handleSelectedOption(e) {
    const value = e.target.value;

    setName(value);

    if (value === "") return;

    if (value === "name")
      dispatch(
        arrayFrom === "/browse"
          ? sortRecipesByName(array)
          : sortLikedRecipesByName(array)
      );

    if (value === "calories")
      dispatch(
        arrayFrom === "/browse"
          ? sortRecipesByCalories(array)
          : sortLikedRecipesByCalories(array)
      );

    if (value === "liked first") dispatch(sortLikedRecipesByLiked(array));

    if (value === "created first") dispatch(sortLikedRecipesByCreated(array));
  }

  return (
    <div className={styles.sort_by_container}>
      <label htmlFor={styles.sort_by_button}>Sort by</label>
      <select
        value={name}
        className={styles.sort_by_button}
        onChange={handleSelectedOption}
      >
        <option value="">Options</option>

        {options.map((option) => (
          <option value={option} key={nanoid()}>
            {firstLetterToUpperCase(option)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortButton;
