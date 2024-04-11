import ContactForm from "../../components/Contacts/ContactForm/ContactForm";
import Header from "../../components/Header/Header";
import styles from "../../Pages/ContactPage/contact.module.scss";
import Card from "../../components/Card/Card";

export default function Contacts() {
  return (
    <>
      <Header />
      <div className={styles["contact-wrapper"]}>
        <Card>
          <ContactForm />
        </Card>
      </div>
      <div className={styles["copyright"]}>
        <p>
          © All rights reserved by<span> Gabriela Lopez</span>
        </p>
      </div>
    </>
  );
}
