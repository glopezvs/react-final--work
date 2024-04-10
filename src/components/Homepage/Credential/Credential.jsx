import { useEffect, useState } from "react";
import styles from "../Credential/styles.module.scss";
import notClicked from "../../../assets/notClicked.svg";
import clicked from "../../../assets/clicked.svg";

export default function Credential({ heading, subheading, image }) {
  const [userData, setUserData] = useState([null]);
  const [imageSrc, setImageSrc] = useState(notClicked);

  const handleMouseEnter = () => {
    setImageSrc(clicked);
  };

  const handleMouseLeave = () => {
    setImageSrc(notClicked);
  };
  useEffect(() => {
    fetch("http://localhost:5173/api/data.json")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles["show-credentials--wrapper"]}>
      <div className={styles["cover-wrapper"]}>
        <img className={styles["more-cover--wrapper"]} src={image} alt="" />
      </div>
      <div className={styles["bottom-wrapper"]}>
        <div className={styles["titles-wrapper"]}>
          <p className={styles["grey-text"]}>
            {userData && userData[subheading]}
          </p>
          <p className={styles["bold-text"]}>{userData && userData[heading]}</p>
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
