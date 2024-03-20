//* UI-components
import ParallaxEffect from "../ParallaxEffect/ParallaxEffect";

//* styles
import styles from "./DisplayCard.module.css";

function Card({ iconUrl, header, children }) {
  return (
    <div>
      <ParallaxEffect glareColor="lightGreen">
        <div className={styles.card_container}>
          <img src={iconUrl} alt="Icon" />
          <h2>{header}</h2>
          <p>{children}</p>

          <div className={styles.straps_decoration}></div>
        </div>
      </ParallaxEffect>
    </div>
  );
}

export default Card;
