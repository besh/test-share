import PropTypes from "prop-types";
import styles from "./Heading.module.scss";
import cx from "classnames";

const Heading = ({ as, children, className }) => {
  const Element = as === "display" ? "h1" : as;
  const rootStyle = cx(styles.root, styles[as], className);

  return <Element className={rootStyle}>{children}</Element>;
};

Heading.propTypes = {
  as: PropTypes.oneOf(["display", "h1", "h2", "h3", "h4"]),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Heading;
