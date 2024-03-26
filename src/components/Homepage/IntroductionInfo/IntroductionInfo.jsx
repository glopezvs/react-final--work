import { useEffect, useState } from "react";
import pic from "../../../assets/pic.jpg";
import styles from "../IntroductionInfo/introductionInfo.module.scss";

export default function Introduction() {
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
    <div className={styles["introduction-wrapper"]}>
      <div className={styles["user-img--wrapper"]}>
        <img src={pic} alt="" />
      </div>

      {/* show about me information*/}

      <div className={styles["info-wrapper"]}>
        <span className={styles.job}>A front-end Developer</span>
        <div className={styles["name-wrapper"]}>
          <span className={styles["full-name"]}>{userData.name}</span>
          <span className={styles["full-name"]}>{userData.surname}</span>
        </div>
        <p className={styles.job}>{userData.about}</p>
      </div>
    </div>
  );
}
