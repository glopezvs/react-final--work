import styles from "../Education/styles.module.scss";

export default function Education() {
  return (
    <div className={styles["education-wrapper"]}>
      <span className={styles["bold-font"]}>Experience</span>

      <div className={styles["education-info--wrapper"]}>
        <span className={styles["grey-font"]}>
          September 2019 - September 2022
        </span>
        <span className={styles["blue-font"]}>
          Licenciatura Tecnologias e Design de Multimédia
        </span>
        <span className={styles["grey-font"]}>
          Instituto Politécnico de Viseu
        </span>
      </div>
      <div className={styles["education-info--wrapper"]}>
        <span className={styles["grey-font"]}>September 2023 - April 2024</span>
        <span className={styles["blue-font"]}>Full-Stack Web Development</span>
        <span className={styles["grey-font"]}>
          EDIT - Disruptive Digital Education
        </span>
      </div>
    </div>
  );
}
// {userData && userData[heading]}
// import { useEffect, useState } from "react";
// import styles from "../Education/styles.module.scss";

// export default function Education({
//   heading,
//   experienceD,
//   experienceA,
//   experienceP,
// }) {
//   const [userData, setUserData] = useState([null]);

//   useEffect(() => {
//     fetch("http://localhost:5173/api/data.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setUserData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div className={styles["education-wrapper"]}>
//       <div>
//         <p>{userData && userData[heading]}</p>
//         <div className={styles["education-info--wrapper"]}>
//           <span className={styles["grey-text"]}>
//             {userData && userData[experienceD]}
//           </span>
//           <span className={styles["grey-text"]}>
//             {userData && userData[experienceA]}
//           </span>
//           <span className={styles["grey-text"]}>
//             {userData && userData[experienceP]}
//           </span>
//         </div>
//         <div className={styles["education-info--wrapper"]}>
//           <span className={styles["grey-text"]}>
//             {userData && userData[experienceD]}
//           </span>
//           <span className={styles["grey-text"]}>
//             {userData && userData[experienceA]}
//           </span>
//           <span className={styles["grey-text"]}>
//             {userData && userData[experienceP]}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
// {userData && userData[heading]}
