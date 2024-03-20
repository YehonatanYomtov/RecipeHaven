//* react-hooks
import { useEffect } from "react";

//* redux
import { useDispatch, useSelector } from "react-redux";

//* components-UI
import CardsDisplayContainer from "../../components/ui/CardsDisplayContainer/CardsDisplayContainer";

//* slice
import { getLikedRecipeCollection } from "../../features/Recipe/recipeSlice";

//* styles
import styles from "./LikedRecipes.module.css";

function LikedRecipes() {
  const uid = useSelector((state) => state.user.user.uid);
  const likedRecipes = useSelector((state) => state.recipe.likedRecipes);

  const dispatch = useDispatch();

  // const { documents } = useACollection("likedRecipes");

  // const [likedRecipes, setLikedRecipes] = useState([]);

  // useEffect(() => {
  //   const liked = documents.filter((doc) => doc.uid === uid);

  //   setLikedRecipes(liked);
  // }, [documents, uid]);

  useEffect(() => {
    dispatch(getLikedRecipeCollection(uid));
  }, [dispatch, uid]);

  return (
    <div className={styles.liked_recipes_container}>
      <CardsDisplayContainer
        array={likedRecipes}
        sortButton={["name", "calories", "liked first", "created first"]}
      />
    </div>
  );
}

export default LikedRecipes;
