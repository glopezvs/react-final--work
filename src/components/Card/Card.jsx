import styles from "./styles.module.scss";

function Card({ children, className }) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}

export default Card;
