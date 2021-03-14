import PropTypes from "prop-types";
import styles from "./Timer.module.scss";

const Timer = ({ time }) => {
  return (
    <div className={styles.root}>
      <div className={styles.center} />
      <div
        className={styles.timer}
        style={{ "animation-duration": `${time}s` }}
      >
        <div
          className={styles.mask}
          style={{ "animation-duration": `${time}s` }}
        />
      </div>
    </div>
  );
};

Timer.propTypes = {
  time: PropTypes.number,
};

export default Timer;
