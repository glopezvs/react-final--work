import styles from "../BackgroundContainer/backgroundContainer.module.scss";
import Introduction from "../IntroductionInfo/IntroductionInfo";

export default function FirstContainer() {
  return (
    <div className={styles.whiteRect}>
      <Introduction />
    </div>
  );
}
