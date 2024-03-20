//* redux
import { useDispatch, useSelector } from "react-redux";

//* browse-feature-components
import BrowseHistoryTag from "../BrowseHistoryTag/BrowseHistoryTag";

//* components-UI
import ErrorMessage from "../../../components/ui/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../../components/ui/LoadingSpinner/LoadingSpinner";
import DeleteButton from "../../../components/ui/DeleteButton/DeleteButton";

//* slice
import { deleteAllBrowseHistoryTags } from "../browseSlice";

//* styles
import styles from "./BrowseHistoryContainer.module.css";

function BrowseHistoryContainer({ tags, setTagToPlaceInInput }) {
  const status = useSelector((state) => state.browse.status);
  const error = useSelector((state) => state.browse.error);

  const dispatch = useDispatch();

  return (
    <>
      {status === "loading" && <LoadingSpinner height={40} width={40} />}

      {error && status === "error" && <ErrorMessage message={error} />}

      {(status === "succeeded" || status === "idle") &&
        tags.length > 0 &&
        !error && (
          <div className={styles.container}>
            {tags.map((tag) => (
              <BrowseHistoryTag
                tag={tag}
                setTagToPlaceInInput={setTagToPlaceInInput}
                key={tag.id}
              />
            ))}
            <DeleteButton
              className={styles.delete_button}
              onClick={() => dispatch(deleteAllBrowseHistoryTags(tags))}
            />
          </div>
        )}
    </>
  );
}

export default BrowseHistoryContainer;
