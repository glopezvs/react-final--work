import email from "../../../assets/mail.svg";
import loc from "../../../assets/loc.svg";
import phone from "../../../assets/phone.svg";
import insta from "../../../assets/insta.svg";
import behance from "../../../assets/behance.svg";
import linkedin from "../../../assets/linkedin.svg";
import styles from "../../Contacts/ContactInfo/styles.module.scss";

export default function ContactInfo() {
  return (
    <div className={styles["information-wrapper"]}>
      <div className={styles["contact-info--wrapper"]}>
        <h3>Contact Info</h3>
        <div className={styles["information"]}>
          <div className={styles["icon-wrapper"]}>
            <img src={email} alt="" />
          </div>
          <div className={styles["text-wrapper"]}>
            <span className={styles["text-gray--heading"]}>mail me</span>
            <span className={styles["text-gray"]}>
              gabrielasvlopez@gmail.com
            </span>
          </div>
        </div>
        <div className={styles["information"]}>
          <div className={styles["icon-wrapper"]}>
            <img src={phone} alt="" />
          </div>
          <div className={styles["text-wrapper"]}>
            <span className={styles["text-gray--heading"]}>Conctact me</span>
            <span className={styles["text-gray"]}>935177675</span>
          </div>
        </div>
        <div className={styles["information"]}>
          <div className={styles["icon-wrapper"]}>
            <img src={loc} alt="" />
          </div>
          <div className={styles["text-wrapper"]}>
            <span className={styles["text-gray--heading"]}>Location</span>
            <span className={styles["text-gray"]}>Furadouro, Ovar</span>
          </div>
        </div>
      </div>

      <div className={styles["social-info--wrapper"]}>
        <h3>Social Info</h3>
        <div className={styles["social-icon--wrapper"]}>
          <div className={styles["icon-wrapper"]}>
            <img src={insta} alt="" />
          </div>
          <div className={styles["icon-wrapper"]}>
            <img src={behance} alt="" />
          </div>
          <div className={styles["icon-wrapper"]}>
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
