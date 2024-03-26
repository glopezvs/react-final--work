import styles from "../Homepage/homepage.module.scss";
//import ThirdContainer from "./ThirdContainer/ThirdContainer";
//import SecondContainer from "./SecondContainer/SecondContainer";
//import FirstContainer from "./FirstContainer/FirstContainer";
import All from "../Homepage/All";

export default function Homepage() {
  return (
    <div className={styles["homepage-wrapper"]}>
      <All showIntroduction={true} />
      <All showCredentials={true} />
      <All showServices={true} />
      <All showSocials={true} />
      <All showBigTitle={true} />
    </div>
  );
}

/*  <FirstContainer />
      <SecondContainer infoToShow="showcase" />
      <SecondContainer infoToShow="more" />
      <ThirdContainer infoToShow="first" />
      <SecondContainer infoToShow="profiles" />
      <ThirdContainer infoToShow="second" /> */
