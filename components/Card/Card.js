import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import cx from "classnames";

const Card = ({ children, className }) => {
  const rootStyle = cx(styles.root, className);
  return <div className={rootStyle}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
