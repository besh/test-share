import PropTypes from "prop-types";
import styles from "./Body.module.scss";
import cx from "classnames";

const Body = ({ size, children }) => {
  const rootStyle = cx(styles.root, styles[`body${size}`]);

  return <p className={rootStyle}>{children}</p>;
};

Body.propTypes = {
  size: PropTypes.oneOf(["L", "M"]),
  children: PropTypes.node,
};

export default Body;
