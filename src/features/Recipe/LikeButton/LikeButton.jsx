//* redux
import { useDispatch, useSelector } from "react-redux";

//* slice-recipe
import { deleteRecipe, likeRecipe } from "../recipeSlice";

//* custom-hooks
import { useACollection } from "../../../hooks/useACollection";

//* styles
import styles from "./LikeButton.module.css";

function LikeButton({ recipe }) {
  const { documents: likedRecipes } = useACollection("likedRecipes");
  const matchedRecipe = likedRecipes.find(
    (document) => document.id === recipe.id
  );

  const uid = useSelector((state) => state.user.user.uid);

  const dispatch = useDispatch();

  return (
    <button
      className={styles.like_button}
      onClick={() =>
        dispatch(
          matchedRecipe
            ? deleteRecipe(matchedRecipe)
            : likeRecipe({ ...recipe, uid })
        )
      }
    >
      <img
        src={`/images/icons/Heart-${
          matchedRecipe ? "liked" : "unliked"
        }-icon.png`}
        alt="like"
      />
    </button>
  );
}

export default LikeButton;

// import { useDispatch, useSelector } from "react-redux";
// import styles from "./LikeButton.module.css";
// import { deleteRecipe, likeRecipe } from "../recipeSlice";
// import { useACollection } from "../../../hooks/useACollection";

// function LikeButton({ recipe }) {
//   const { id } = recipe;

//   const { documents: likedRecipes } = useACollection("likedRecipes");

//   const matchedRecipe = likedRecipes.find((document) => document.id === id);

//   const {
//     user: { uid },
//   } = useSelector((state) => state.user);

//   const dispatch = useDispatch();

//   return (
//     <button
//       className={styles.like_button}
//       onClick={() =>
//         dispatch(
//           matchedRecipe
//             ? deleteRecipe(matchedRecipe)
//             : likeRecipe({ ...recipe, uid })
//         )
//       }
//     >
//       <img
//         src={`/images/icons/Heart-${
//           matchedRecipe ? "liked" : "unliked"
//         }-icon.png`}
//         alt="like"
//       />
//     </button>
//   );
// }

// export default LikeButton;
