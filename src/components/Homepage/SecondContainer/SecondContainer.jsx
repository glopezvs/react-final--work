import styles from "../BackgroundContainer/backgroundContainer.module.scss";
import OtherInfo from "../OtherInfo/OtherInfo";

export default function SecondContainer({ infoToShow }) {
  return (
    <div className={styles.whiteRect}>
      {infoToShow && (
        <>
          {infoToShow === "showcase" && (
            <OtherInfo
              dataToShow="showcase"
              credentialToShow="projects"
              showImg={true}
            />
          )}
          {infoToShow === "more" && (
            <OtherInfo
              dataToShow="more"
              credentialToShow="credential"
              showImg={true}
            />
          )}
          {infoToShow === "profiles" && (
            <OtherInfo
              dataToShow="stay"
              credentialToShow="profiles"
              showIcons={true}
            />
          )}
        </>
      )}
    </div>
  );
}
