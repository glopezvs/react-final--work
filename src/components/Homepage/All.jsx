import { useEffect, useState } from "react";
import styles from "../Homepage/all.module.scss";

import reactIcon from "../../assets/react.svg";
import cssIcon from "../../assets/css.svg";
import htmlIcon from "../../assets/html.svg";
import jsIcon from "../../assets/js.svg";
import figmaIcon from "../../assets/figma.svg";
import stars from "../../assets/star.svg";
import pic from "../../assets/pic.jpg";
import linkedln from "../../assets/linkedin.svg";
import behance from "../../assets/behance.svg";
import cover from "../../assets/more.jpg";

export default function All({
  showIntroduction = false,
  showCredentials = false,
  showServices = false,
  showSocials = false,
  showBigTitle = false,
}) {
  const [userData, setUserData] = useState(null);

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
    <>
      {showIntroduction && (
        <div className={styles["single-background"]}>
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
        </div>
      )}

      {showCredentials && (
        <div className={styles["single-background"]}>
          <div className={styles["cover-wrapper"]}>
            <img className={styles["more-cover--wrapper"]} src={cover} alt="" />
          </div>

          {/* show small container title*/}
          <div className={styles["titles-wrapper"]}>
            <p className={styles["grey-text"]}>{userData.more}</p>
            <p className={styles["bold-text"]}>{userData.credential}</p>
          </div>
        </div>
      )}

      {showServices && (
        <div className={styles["single-background"]}>
          <div className={styles["service-wrapper"]}>
            <div className={styles["icons-service--wrapper"]}>
              <img className={styles["icons-service"]} src={reactIcon} alt="" />
              <img className={styles["icons-service"]} src={htmlIcon} alt="" />
              <img className={styles["icons-service"]} src={cssIcon} alt="" />
              <img className={styles["icons-service"]} src={jsIcon} alt="" />
              <img className={styles["icons-service"]} src={figmaIcon} alt="" />
            </div>

            <div className={styles["titles-wrapper"]}>
              <p className={styles["grey-text"]}>{userData.specialization}</p>
              <p className={styles["bold-text"]}>{userData.services}</p>
            </div>
          </div>
        </div>
      )}

      {showSocials && (
        <div className={styles["single-background"]}>
          {/* Show social icons */}
          <div className={styles["icons-social--wrapper"]}>
            <div className={styles["icons-social--border"]}>
              <img className={styles["icons-social"]} src={behance} alt="" />
            </div>
            <div className={styles["icons-social--border"]}>
              <img className={styles["icons-social"]} src={linkedln} alt="" />
            </div>
          </div>

          {/* Show small container title */}
          <div className={styles["titles-wrapper"]}>
            <p className={styles["grey-text"]}>{userData.stay}</p>
            <p className={styles["bold-text"]}>{userData.profiles}</p>
          </div>
        </div>
      )}

      {showBigTitle && (
        <div className={styles["single-background"]}>
          <div className={styles["stars-wrapper"]}>
            <img className={styles.stars} src={stars} alt="" />
          </div>

          <div className={styles["big-tittle--wrapper"]}>
            <p className={styles["big-title"]}>{userData.let}</p>

            <p className={styles["big-title"]}>
              {userData.work}

              <span className={styles["alternative-text"]}>
                {userData.together}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
