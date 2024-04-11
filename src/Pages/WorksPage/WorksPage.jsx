import Card from "../../components/Card/Card";
//import styles from "../../Pages/AboutPage/about.module.scss";
import Header from "../../components/Header/Header";
//import star from "../../assets/star2.svg";
import Works from "../../components/Works/Works";
export default function WorksPage() {
  return (
    <>
      <Header />
      {/* <div className={styles["works-wrapper"]}>
        <div className={`${styles.wrapper} ${styles["span-eight"]}`}>
          <div className={styles["self-wrapper"]}>
            <img src={star} alt="" />
            <span>All projects </span>
            <img src={star} alt="" />
          </div>
        </div>
      </div> */}
      <Card>
        <Works />
      </Card>
      <Card>
        <Works />
      </Card>
    </>
  );
}
