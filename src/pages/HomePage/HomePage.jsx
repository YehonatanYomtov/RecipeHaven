//* components-UI
import Section_1 from "./subComponents/Section_1/Section_1";
import Section_2 from "./subComponents/Section_2/Section_2";
import Section_3 from "./subComponents/Section_3/Section_3";
import Section_4 from "./subComponents/Section_4/Section_4";
import Section_5 from "./subComponents/Section_5/Section_5";

//* styles
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container_main}>
      <Section_1 />

      <Section_2 />

      <Section_3 />

      <Section_4 />

      <Section_5 />
    </div>
  );
}

export default HomePage;
