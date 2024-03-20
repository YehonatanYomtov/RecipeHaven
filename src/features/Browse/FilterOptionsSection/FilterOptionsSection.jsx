//* redux-toolkit
import { nanoid } from "@reduxjs/toolkit";

//* components-UI
import Button from "../../../components/ui/Button/Button";

//* utils
import { firstLetterToUpperCase } from "../../../utils/firstLetterToUpperCase";

//* data
import { RECIPE_TYPES } from "../../../data/recipesTypesData";

//* styles
import styles from "./FilterOptionsSection.module.css";
import { camelCaseSeparator } from "../../../utils/camelCaseSeparator";

function FilterOptionsSection({ onFilter, onOptionChanger }) {
  return (
    <div className={styles.main_container}>
      {RECIPE_TYPES.map((category) => (
        <section className={styles.select_buttons_container} key={nanoid()}>
          <label>
            {firstLetterToUpperCase(camelCaseSeparator(category.header))}
          </label>

          <select
            onChange={(e) =>
              onOptionChanger({
                category: category.header,
                option: e.target.value,
              })
            }
            name={category.header}
            key={nanoid()}
          >
            <option>Select...</option>
            {category[category.header].map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </section>
      ))}

      <Button type="blue" onClick={onFilter}>
        Filter
      </Button>
    </div>
  );
}

export default FilterOptionsSection;
