import Card from "../../components/Card/Card";
import styles from "../../Pages/AboutPage/about.module.scss";
import Credential from "../../components/Homepage/Credential/Credential";
import Socials from "../../components/Homepage/Socials/Socials";
import BigHeading from "../../components/Homepage/BigHeading/BigHeading";
import Summary from "../../components/About/Summary/Summary";
import uni from "../../assets/uni.jpg";
import ImageUser from "../../components/About/ImageUser/ImageUser";
import Education from "../../components/About/Education/Education";
import Experience from "../../components/About/Experience/Experience";
import Header from "../../components/Header/Header";

import star from "../../assets/star2.svg";
export default function About() {
  return (
    <>
      <Header />
      <div className={styles["about-wrapper"]}>
        <Card className={styles["span-four"]}>
          <ImageUser />
        </Card>

        <div className={`${styles.wrapper} ${styles["span-eight"]}`}>
          <div className={styles["self-wrapper"]}>
            <img src={star} alt="" />
            <span>SELF-SUMMARY</span>
            <img src={star} alt="" />
          </div>
          <Card className={styles["span-eight"]}>
            <Summary />
          </Card>
        </div>

        <Card className={styles["span-six"]}>
          <Education />
        </Card>
        <Card className={styles["span-six"]}>
          <Experience />
        </Card>
        <Card className={styles["span-three"]}>
          <Socials />
        </Card>
        <Card className={styles["span-six"]}>
          <BigHeading />
        </Card>
        <Card className={styles["span-three"]}>
          <Credential subheading="more" heading="credential" image={uni} />
        </Card>
      </div>
    </>
  );
}
