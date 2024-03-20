//* styles
import styles from "./Section_3.module.css";

function Section_3() {
  return (
    <section className={styles.section_3_main_container}>
      <div className={styles.back_cover}></div>

      <div className={styles.box_1}>
        <h2>Create your own recipes</h2>

        <img
          className={styles.create_img}
          src="/images/Create_section-3.png"
          alt="recipe"
        />
      </div>

      <div className={styles.box_2}>
        <h2>Browse delicious recipes</h2>
        <img
          className={styles.binoculars_img}
          src="/images/Binoculars.png"
          alt="browse"
        />
      </div>

      <div className={styles.box_3}>
        <h2>Like your favorites</h2>
        <img
          className={styles.thumbs_up_img}
          src="/images/Thumbs_up.png"
          alt="Thumbs up"
        />
      </div>
    </section>
  );
}

export default Section_3;
