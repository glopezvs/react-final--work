import styles from "../Education/styles.module.scss";

export default function Experience() {
  return (
    <div className={styles["education-wrapper"]}>
      <span className={styles["bold-font"]}>Education</span>
      <div className={styles["education-info--wrapper"]}>
        <span className={styles["grey-font"]}>March 2023 - Ongoing</span>
        <span className={styles["blue-font"]}>Operator</span>
        <span className={styles["grey-font"]}>Mercadona </span>
      </div>
      <div className={styles["education-info--wrapper"]}>
        <span className={styles["grey-font"]}>March 2022 - June 2022 </span>
        <span className={styles["blue-font"]}>Ui-UX Intern</span>
        <span className={styles["grey-font"]}>Softinsa </span>
      </div>
    </div>
  );
}
