import styles from "./homepage.module.scss";
import ThirdContainer from "./ThirdContainer/ThirdContainer";
import SecondContainer from "./SecondContainer/SecondContainer";
import FirstContainer from "./FirstContainer/FirstContainer";

export default function Homepage() {
  return (
    <div className={styles["homepage-wrapper"]}>
      <FirstContainer />
      <SecondContainer infoToShow="showcase" />
      <SecondContainer infoToShow="more" />
      <ThirdContainer infoToShow="first" />
      <SecondContainer infoToShow="profiles" />
      <ThirdContainer infoToShow="second" />
    </div>
  );
}
