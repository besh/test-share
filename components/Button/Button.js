import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import cx from "classnames";

const Button = ({ children, className, ...props }) => {
  const rootStyles = cx(styles.root, className);
  return (
    <button className={rootStyles} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
