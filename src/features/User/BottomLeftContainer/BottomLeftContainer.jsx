//* styles
import styles from "./BottomLeftContainer.module.css";

function BottomLeftContainer({ data, style }) {
  const { recipesCreated, recipesLiked, recipesDeleted } = data;

  return (
    <div style={style} className={styles.recipes_info_main_container}>
      <h1>Recipes History</h1>

      <p>
        Recipes created: <span>{recipesCreated.length}</span>
      </p>

      <p>
        Recipes liked: <span>{recipesLiked.length}</span>
      </p>

      <p>
        Recipes deleted: <span>{recipesDeleted.length}</span>
      </p>
    </div>
  );
}

export default BottomLeftContainer;
