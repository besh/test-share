import Heading from "../Heading/Heading";
import styles from "./Control.module.scss";

const Control = () => {
  return (
    <div className={styles.root}>
      <img src="/plaster-formant.png" alt="Spot" className={styles.image} />
      <div className={styles.inner}>
        <Heading as="display" className={styles.text}>
          What would you control?
        </Heading>
      </div>
    </div>
  );
};

export default Control;
