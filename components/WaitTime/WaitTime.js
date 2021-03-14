import PropTypes from "prop-types";
import Ring from "../../svg/ring.svg";
import styles from "./WaitTime.module.scss";

const WaitTime = ({ time, text }) => {
  return (
    <div className={styles.root}>
      {time !== undefined && (
        <p className={styles.time}>{Math.round(time / 60)} m</p>
      )}
      <div className={styles.cone} />
      <div className={styles.geo} />
      <Ring className={styles.ring} />
      <p className={styles.message}>{text}</p>
    </div>
  );
};

WaitTime.propTypes = {
  time: PropTypes.number,
  text: PropTypes.string,
};

export default WaitTime;
