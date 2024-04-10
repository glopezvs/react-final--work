import user from "../../../assets/user.jpg";
import styles from "./styles.module.scss";

export default function ImageUser() {
  return (
    <div className={styles["user-img--wrapper"]}>
      <img src={user} alt="" />
    </div>
  );
}
