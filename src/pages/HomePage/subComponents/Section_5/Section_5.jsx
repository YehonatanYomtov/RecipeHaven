//* react-router
import { Link } from "react-router-dom";

//* styles
import styles from "./Section_5.module.css";

function Section_5() {
  return (
    <section className={styles.section_5_main_container}>
      <div className={styles.mosaic_container}>
        <Link className={styles.link_item_one} to="browse">
          <img
            className={styles.magnifying_glass}
            src="/images/animated/Magnifying-glass.png"
            alt="Magnifying-glass"
          />
          <div className={styles.cover}>Browse</div>
        </Link>

        <Link className={styles.link_item_two} to="recipes/new">
          <img
            className={styles.pen}
            src="/images/animated/Pen.png"
            alt="Pen"
          />
          <div className={styles.cover}>Create</div>
        </Link>

        <Link className={styles.link_item_three} to="recipes/liked-recipes">
          <img
            className={styles.cover_notebook}
            src="/images/Cover-notebook.png"
            alt="Notebook"
          />
          <img
            className={styles.popcorn}
            src="/images/animated/Popcorn.png"
            alt="Popcorn"
          />
          <div className={styles.cover}>My recipes</div>
        </Link>
      </div>

      <img className={styles.table} src="/images/Table.png" alt="Table" />

      <p className={styles.footer}>Yomtov INC ©</p>
    </section>
  );
}

export default Section_5;
