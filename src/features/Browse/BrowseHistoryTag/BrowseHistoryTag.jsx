//* redux
import { useDispatch } from "react-redux";

//* browse-slice
import { deleteBrowseHistoryTag } from "../browseSlice";

//* UI-components
import Button from "../../../components/ui/Button/Button";

//* styles
import styles from "./BrowseHistoryTag.module.css";

function BrowseHistoryTag({ tag, setTagToPlaceInInput }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.history_tag_container}>
      <Button
        className={styles.history_tag_text}
        onClick={() => setTagToPlaceInInput(tag.input)}
      >
        {tag.input}
      </Button>

      <button
        className={styles.delete_button}
        name="history_tag_delete_button"
        onClick={() => dispatch(deleteBrowseHistoryTag(tag.dbId))}
      >
        X
      </button>
    </div>
  );
}

export default BrowseHistoryTag;
