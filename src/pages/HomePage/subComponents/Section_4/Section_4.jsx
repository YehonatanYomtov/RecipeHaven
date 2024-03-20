//* UI-components
import DisplayCard from "../../../../components/ui/DisplayCard/DisplayCard";

//* styles
import styles from "./Section_4.module.css";

function Section_4() {
  return (
    <section className={styles.section_4_main_container}>
      <img
        src="/images/backgrounds/Section-4-bg.png"
        className={styles.section_4_bg}
      />
      <h1>We care!</h1>

      <div className={styles.cards_container}>
        <DisplayCard iconUrl="/images/icons/Storage-icon.png" header="Storage">
          All your created and liked recipes will be saved, and will be private
          to you.
        </DisplayCard>

        <DisplayCard iconUrl="/images/icons/Free-icon.png" header="For free">
          All features in this application are completely FREE! No hidden fees.
          No additional charging. Browsing, Liking, Creating, do till your heart
          content.
        </DisplayCard>
        <DisplayCard iconUrl="/images/icons/Easy-icon.png" header="Easy">
          Super easy and simple to use for all users! from 10 year olds to:
          infinite.
        </DisplayCard>
      </div>
    </section>
  );
}

export default Section_4;
