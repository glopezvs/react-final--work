import styles from "../Works/styles.module.scss";
export default function ImageUser() {
  return (
    <div className={styles["span-three"]}>
      <div className={styles["user-img--wrapper"]}>
        <img src=" " alt="" />
      </div>
      <div className={styles["titles-wrapper"]}>
        <p className={styles["grey-text"]}>project 1</p>
        <p className={styles["bold-text"]}>lorem</p>
      </div>
    </div>
  );
}
