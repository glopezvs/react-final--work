import styles from "../NameLogo/logo.module.scss";
//import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";

const NameLogo = () => {
  {
    /*const [userData, setUserData] = useState([null]);

  useEffect(() => {
    fetch("http://localhost:5174/api/data.json")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
*/
  }
  return (
    <div className={styles.logo}>
      {/*<img src={userData.image} />*/}
      <img src={logo} alt="" />
    </div>
  );
};

export default NameLogo;
