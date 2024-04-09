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

      <Link className={styles.start_creating_link_button} to="/recipes/new">
        Start creating
      </Link>
    </section>
  );
}

export default NextSection;
