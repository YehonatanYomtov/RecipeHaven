//* UI-components
import Button from "../../../components/ui/Button/Button";

//* styles
import styles from "./BrowseFilterButton.module.css";

function BrowseFilterButton({ isFiltering, setIsFiltering }) {
  return (
    <Button
      className={`${styles.browse_filter_button} ${
        isFiltering ? styles.active : null
      }`}
      onClick={() => setIsFiltering((cur) => !cur)}
    >
      {!isFiltering ? "Browse Filter" : "Close"}
    </Button>
  );
}

export default BrowseFilterButton;
