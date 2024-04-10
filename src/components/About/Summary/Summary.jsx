import { useEffect, useState } from "react";
import styles from "../Summary/styles.module.scss";
import stars from "../../../assets/star.svg";

export default function Summary() {
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
    <div className={styles["summary-wrapper"]}>
      <div className={styles["stars-wrapper"]}>
        <img className={styles.stars} src={stars} alt="" />
      </div>
      <div className={styles["text-wrapper"]}>
        <p className={styles["full-name"]}>{userData?.fullName}</p>
        <p className={styles["about"]}>{userData?.aboutMe}</p>
      </div>
    </div>
  );
}
