import { useEffect, useState } from "react";
import reactIcon from "../../../assets/react.svg";
import cssIcon from "../../../assets/css.svg";
import htmlIcon from "../../../assets/html.svg";
import jsIcon from "../../../assets/js.svg";
import figmaIcon from "../../../assets/figma.svg";
import stars from "../../../assets/star.svg";

import styles from "./servicesInfo.module.scss";

export default function Services({
  dataToShow,
  credentialToShow,
  alternative,
  showIcons = false,
  isBigTitle = false,
  showStar = false,
  capital = false,
}) {
  const [userData, setUserData] = useState([null]);

  useEffect(() => {
    fetch("api/data.json")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className={styles["service-wrapper"]}>
      {showIcons && (
        <div className={styles["icons-wrapper"]}>
          <img className={styles.icons} src={reactIcon} alt="" />
          <img className={styles.icons} src={htmlIcon} alt="" />
          <img className={styles.icons} src={cssIcon} alt="" />
          <img className={styles.icons} src={jsIcon} alt="" />
          <img className={styles.icons} src={figmaIcon} alt="" />
        </div>
      )}

      {showStar && (
        <div className={styles["stars-wrapper"]}>
          <img className={styles.stars} src={stars} alt="" />
        </div>
      )}
      <div>
        <p
          className={`${styles["grey-text"]} ${
            isBigTitle ? styles["big-title"] : ""
          } ${capital ? styles["capital-text"] : ""}`}
        >
          {userData && userData[dataToShow]}
        </p>
        <p
          className={`${styles["bold-text"]} ${
            isBigTitle ? styles["big-title"] : ""
          }`}
        >
          {userData && userData[credentialToShow]}
          <span className={alternative ? styles["alternative-text"] : ""}>
            {userData && userData[alternative]}
          </span>
        </p>
      </div>
    </div>
  );
}
