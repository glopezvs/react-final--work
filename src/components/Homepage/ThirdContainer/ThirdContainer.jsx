import styles from "../BackgroundContainer/backgroundContainer.module.scss";
import Services from "../ServicesInfo/ServicesInfo";
export default function ThirdContainer({ infoToShow }) {
  return (
    <div className={styles.whiteRect}>
      {infoToShow && (
        <>
          {infoToShow === "first" && (
            <Services
              dataToShow="specialization"
              credentialToShow="services"
              isGreyText={true}
              isBigTitle={false}
              showIcons={true}
            />
          )}
          {infoToShow === "second" && (
            <Services
              alternative="together"
              dataToShow="title"
              credentialToShow="work"
              showIcons={false}
              isBigTitle={true}
              showStar={true}
              capital={true}
            />
          )}
          {infoToShow === "third" && (
            <Services
              dataToShow="specialization"
              credentialToShow="services"
              isBigTitle={false}
              showIcons={false}
            />
          )}
        </>
      )}
    </div>
  );
}
