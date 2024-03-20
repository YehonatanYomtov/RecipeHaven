// //* react-hooks
// import { useState } from "react";

// //* redux-toolkit
// import { nanoid } from "@reduxjs/toolkit";

// //* recipe-featured-components
// import { useDispatch } from "react-redux";

// //* UI-components

// //* recipe-slice
// import {
//   sortLikedRecipesByCalories,
//   sortLikedRecipesByCreated,
//   sortLikedRecipesByLiked,
//   sortLikedRecipesByName,
//   sortRecipesByCalories,
//   sortRecipesByName,
// } from "../recipeSlice";

// //* utils
// import { firstLetterToUpperCase } from "../../../utils/firstLetterToUpperCase";

// //* styles
// import styles from "./SortButton.module.css";
// import { sortArrayOfObjects } from "../../../utils/sortArrayOfObjects";

// function SortButtonV2({ arrayFrom, array, setLikedRecipes, options }) {
//   const dispatch = useDispatch();

//   const [name, setName] = useState("");

//   function handleSelectedOption(e) {
//     const value = e.target.value;
//     console.log("value: ", value);

//     setName(value);

//     if (value === "") return;

//     if (value === "name") {
//       if (arrayFrom === "/browse") {
//         dispatch(sortRecipesByName(array));
//       } else {
//         setLikedRecipes(sortArrayOfObjects(array, "label"));
//       }
//     }

//     if (value === "calories") {
//       if (arrayFrom === "/browse") {
//         dispatch(sortRecipesByCalories(array));
//       } else {
//         setLikedRecipes(sortArrayOfObjects(array, "calories"));
//       }
//     }

//     if (value === "liked first")
//       setLikedRecipes(sortArrayOfObjects(array, "liked"));

//     if (value === "created first")
//       setLikedRecipes(sortArrayOfObjects(array, "createdByUser"));
//   }

//   return (
//     <div className={styles.sort_by_container}>
//       <label htmlFor={styles.sort_by_button}>Sort by</label>
//       <select
//         value={name}
//         className={styles.sort_by_button}
//         onChange={handleSelectedOption}
//       >
//         <option value="">Options</option>

//         {options.map((option) => (
//           <option value={option} key={nanoid()}>
//             {firstLetterToUpperCase(option)}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default SortButtonV2;
