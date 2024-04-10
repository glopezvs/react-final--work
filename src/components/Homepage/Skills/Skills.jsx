import { useEffect, useState } from "react";
import styles from "../Skills/styles.module.scss";
import reactIcon from "../../../assets/react.svg";
import cssIcon from "../../../assets/css.svg";
import htmlIcon from "../../../assets/html.svg";
import jsIcon from "../../../assets/js.svg";
import figmaIcon from "../../../assets/figma.svg";
import notClicked from "../../../assets/notClicked.svg";
import clicked from "../../../assets/clicked.svg";

export default function Skills() {
  const [userData, setUserData] = useState([null]);
  const [imageSrc, setImageSrc] = useState(notClicked);

  const handleMouseEnter = () => {
    setImageSrc(clicked);
  };

  const handleMouseLeave = () => {
    setImageSrc(notClicked);
  };

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
    <div className={styles["skills-wrapper"]}>
      <div className={styles["icons-skills--wrapper"]}>
        <img className={styles["icons-skills"]} src={reactIcon} alt="" />
        <img className={styles["icons-skills"]} src={htmlIcon} alt="" />
        <img className={styles["icons-skills"]} src={cssIcon} alt="" />
        <img className={styles["icons-skills"]} src={jsIcon} alt="" />
        <img className={styles["icons-skills"]} src={figmaIcon} alt="" />
      </div>
      <div className={styles["bottom-wrapper"]}>
        <div className={styles["titles-wrapper"]}>
          <p className={styles["grey-text"]}>{userData?.specialization}</p>
          <p className={styles["bold-text"]}>{userData?.services}</p>
        </div>
        <div className={styles["cta-btn---wrapper"]}>
          <img
            className={styles["cta-btn"]}
            src={imageSrc}
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
}
