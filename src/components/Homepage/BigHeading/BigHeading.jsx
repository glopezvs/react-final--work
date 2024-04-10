import { useEffect, useState } from "react";
import styles from "../BigHeading/styles.module.scss";
import stars from "../../../assets/star.svg";
import notClicked from "../../../assets/notClicked.svg";
import clicked from "../../../assets/clicked.svg";

export default function BigHeading() {
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
    <div className={styles["big-title--wrapper"]}>
      <div className={styles["stars-wrapper"]}>
        <img className={styles.stars} src={stars} alt="" />
      </div>
      <div className={styles["bottom-wrapper"]}>
        <div className={styles["big-wrapper"]}>
          <p className={styles["big-title"]}>{userData?.let}</p>
          <p className={styles["big-title"]}>
            {userData?.work}
            <span className={styles["alternative-text"]}>
              {userData?.together}
            </span>
          </p>
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
