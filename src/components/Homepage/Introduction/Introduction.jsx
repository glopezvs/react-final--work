import { useEffect, useState } from "react";
import user from "../../../assets/user.jpg";
import styles from "../Introduction/styles.module.scss";
import notClicked from "../../../assets/notClicked.svg";
import clicked from "../../../assets/clicked.svg";

export default function Introduction() {
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
    <div className={styles["introduction-wrapper"]}>
      <div className={styles["user-img--wrapper"]}>
        <img src={user} alt="" />
      </div>
      <div className={styles["info-wrapper"]}>
        <span className={styles.job}>A Jr. front-end Developer</span>
        <div className={styles["name-wrapper"]}>
          <span className={styles["full-name"]}>{userData?.name}</span>
          <span className={styles["full-name"]}>{userData?.surname}</span>
        </div>
        <p className={styles.job}>{userData?.about}</p>
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
  );
}
