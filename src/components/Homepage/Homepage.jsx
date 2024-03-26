import styles from "../Homepage/homepage.module.scss";
import All from "../Homepage/All";
// import FirstContainer from "./FirstContainer/FirstContainer";
// import SecondContainer from "./SecondContainer/SecondContainer";
// import ThirdContainer from "./ThirdContainer/ThirdContainer";

export default function Homepage() {
  return (
    <div className={styles["homepage-wrapper"]}>
      <All showIntroduction={true} />
      <All showCredentials={true} />
      <All showServices={true} />
      <All showSocials={true} />
      <All showBigTitle={true} />
      {/* 
      <FirstContainer />
      <SecondContainer infoToShow="showcase" />
      <SecondContainer infoToShow="more" />
      <ThirdContainer infoToShow="first" />
      <SecondContainer infoToShow="profiles" />
      <ThirdContainer infoToShow="second" />
      */}
    </div>
  );
}
