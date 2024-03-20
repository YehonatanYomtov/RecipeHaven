//* redux-toolkit
import { nanoid } from "@reduxjs/toolkit";

//* utils
import { isValidUrl } from "../../../utils/isValidUrl";

//* styles
import styles from "./RecipeFullInfoTag.module.css";

function RecipeFullInfoTag({ infoTag }) {
  const { tag, info } = infoTag;

  function checkData(key, value) {
    let result;

    if (
      typeof value === "string" &&
      (value.startsWith("http://") || value.startsWith("https://"))
    ) {
      if (isValidUrl(value)) {
        result = (
          <a href={value}>{value.slice(0, value.indexOf(".com") + 4)}</a>
        );
      }
    }

    if (typeof value === "number") result = <p>{Math.floor(value)}</p>;

    if (typeof value === "string") result = <p>{value}</p>;

    if (Array.isArray(value)) {
      let ingredients;
      let digest;

      if (key === "ingredients") {
        ingredients = value;

        result = ingredients.map((ing) => (
          <p key={nanoid()}>
            <span>
              {ing.quantity} {ing.measure}
            </span>{" "}
            of <span>{ing.food}</span> ({Math.round(ing.weight)}
            <span>g</span>)
          </p>
        ));
      }

      if (key === "digest") {
        digest = value;

        result = digest.map((el) => (
          <p key={nanoid()}>
            <strong>{el.label}: </strong> {el.total && Math.round(el.total)}
            {el.quantity && Math.round(el.quantity)}
            <span>{el.unit}</span>
          </p>
        ));
      }

      if (value.length === 0) result = <p>No data</p>;

      result = value.map((data) => {
        if (typeof data === "string") {
          return <p key={nanoid()}>{data},</p>;
        }
      });
    }

    if (!Array.isArray(value) && typeof value === "object") {
      const toArray = Object.entries(value).map((el) => el[1]);

      result = toArray
        .map((el) => (
          <p key={nanoid()}>
            <strong>{el.label}: </strong>
            {Math.round(el.quantity)}
            <span>{el.unit}</span>
          </p>
        ))
        .toSorted((a, b) => a + b);
    }

    return result;
  }

  if (
    tag !== "yield" &&
    tag !== "id" &&
    tag !== "totalTime" &&
    tag !== "totalWeight" &&
    tag !== "totalDaily" &&
    tag !== "image" &&
    tag !== "images" &&
    tag !== "source" &&
    tag !== "ingredientLines" &&
    tag !== "co2EmissionsClass" &&
    tag !== "totalCO2Emissions" &&
    tag !== "isLiked" &&
    tag !== "uid" &&
    tag !== "dbId"
  ) {
    return (
      <div className={styles.info_tag_container}>
        <h3>{tag} :</h3>
        {checkData(tag, info)}
      </div>
    );
  }
}

export default RecipeFullInfoTag;
