import Card from "../../components/Card/Card";
import styles from "../../Pages/HomePage/home.module.scss";
import Introduction from "../../components/Homepage/Introduction/Introduction";
import Credential from "../../components/Homepage/Credential/Credential";
import Socials from "../../components/Homepage/Socials/Socials";
import Skills from "../../components/Homepage/Skills/Skills";
import BigHeading from "../../components/Homepage/BigHeading/BigHeading";
import cover from "../../assets/cover.jpg";
import uni from "../../assets/uni.jpg";
import Header from "../../components/Header/Header";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className={styles["homepage-wrapper"]}>
        <Card className={styles["span-nine"]}>
          <Introduction />
        </Card>
        <Card className={styles["span-three"]}>
          <Credential subheading="more" heading="credential" image={uni} />
        </Card>
        <Card className={styles["span-three"]}>
          <Credential subheading="projects" heading="showcase" image={cover} />
        </Card>
        <Card className={styles["span-six"]}>
          <Skills />
        </Card>
        <Card className={styles["span-three"]}>
          <Socials />
        </Card>
        <Card className={styles["span-twelve"]}>
          <BigHeading />
        </Card>
        <div className={styles["copyright"]}>
          <p>
            © All rights reserved by<span> Gabriela Lopez</span>
          </p>
        </div>
      </div>
    </>
  );
}
