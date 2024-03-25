import { useEffect, useState } from "react";
import styles from "../OtherInfo/otherInfo.module.scss";
import linkedln from "../../../assets/linkedin.svg";
import behance from "../../../assets/behance.svg";
import more from "../../../assets/more.jpg";
export default function OtherInfo({
  dataToShow,
  credentialToShow,
  showIcons = false,
  showImg = false,
}) {
  const [userData, setUserData] = useState([null]);

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
    <div>
      <div className={styles["other-info--wrapper"]}>
        {showImg && (
          <div className={styles["img-wrapper"]}>
            <img className={styles["more-img--wrapper"]} src={more} alt="" />
          </div>
        )}
        <div>
          {showIcons && (
            <div className={styles["icons-wrapper"]}>
              <div className={styles["icons-border"]}>
                <img className={styles.icons} src={behance} alt="" />
              </div>
              <div className={styles["icons-border"]}>
                <img className={styles.icons} src={linkedln} alt="" />
              </div>
            </div>
          )}
        </div>

        <div>
          <div className={styles["text-wrapper"]}>
            <p className={styles["grey-text"]}>
              {userData && userData[dataToShow]}
            </p>
            <p className={styles["bold-text"]}>
              {userData && userData[credentialToShow]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
