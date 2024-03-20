//* react-router
import { Link } from "react-router-dom";

//* styles
import styles from "./Section_2.module.css";

function NextSection() {
  return (
    <section className={styles.section_2_main_container}>
      <h1>Here anyone can be a chef!</h1>
      <h3>
        Start creating your own creative recipes and save them here for FREE!!!
      </h3>

      <img className={styles.chef_image} src="/images/Chef.png" alt="Chef" />

      {/*<img
        className={styles.abstract_design_image}
        src="/images/backgrounds/Abstract-design-bg.jpg"
        alt="Abstract design"
  />*/}

      <Link className={styles.start_creating_link_button} to="/recipes/new">
        Start creating
      </Link>

      {/*<div className={styles.cover}></div>*/}
    </section>
  );
}

export default NextSection;
