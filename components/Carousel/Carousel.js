import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import styles from "./Carousel.module.scss";

export default ({ children, ...props }) => (
  <AwesomeSlider className={styles.root} organicArrows={false} {...props}>
    {children}
  </AwesomeSlider>
);
