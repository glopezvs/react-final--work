import { useEffect, useState } from "react";
import styles from "../Socials/styles.module.scss";
import linkedln from "../../../assets/linkedin.svg";
import behance from "../../../assets/behance.svg";
import notClicked from "../../../assets/notClicked.svg";
import clicked from "../../../assets/clicked.svg";
import { useNavigate } from "react-router-dom";

export default function Socials() {
  const [userData, setUserData] = useState([null]);
  const [imageSrc, setImageSrc] = useState(notClicked);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setImageSrc(clicked);
  };

  const handleMouseLeave = () => {
    setImageSrc(notClicked);
  };
  const handleClick = () => {
    navigate("/contacts");
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
    <div className={styles["social-wrapper"]}>
      <div className={styles["icons-social--wrapper"]}>
        <div className={styles["icons-social--border"]}>
          <img className={styles["icons-social"]} src={behance} alt="" />
        </div>
        <div className={styles["icons-social--border"]}>
          <img className={styles["icons-social"]} src={linkedln} alt="" />
        </div>
      </div>
      <div className={styles["bottom-wrapper"]}>
        <div className={styles["titles-wrapper"]}>
          <p className={styles["grey-text"]}>{userData?.stay}</p>
          <p className={styles["bold-text"]}>{userData?.profiles}</p>
        </div>
        <div className={styles["cta-btn---wrapper"]}>
          <img
            className={styles["cta-btn"]}
            src={imageSrc}
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
