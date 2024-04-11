import styles from "../../../components/Contacts/ContactForm/styles.module.scss";
import star from "../../../assets/star2.svg";
import email from "../../../assets/mail.svg";

import insta from "../../../assets/insta.svg";
import behance from "../../../assets/behance.svg";
import linkedin from "../../../assets/linkedin.svg";

const ContactForm = () => {
  return (
    <div className={styles["contact-form--wrapper"]}>
      <div className={styles["self-wrapper"]}>
        <img src={star} alt="" />
        <span>Get in touch</span>
        <img src={star} alt="" />
      </div>

      <form className={styles["form-wrapper"]}>
        <div className={styles["field-wrapper"]}>
          <input
            className={styles["form-input"]}
            type="text"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className={styles["field-wrapper"]}>
          <input
            className={styles["form-input"]}
            type="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className={styles["field-wrapper"]}>
          <textarea
            className={styles["form-input"]}
            id="message"
            rows="5"
            cols="15"
            placeholder="Message"
            required
          />
        </div>

        <button className={styles["btn-submit"]} type="submit">
          Submit
        </button>
      </form>

      <div className={styles["social-icon--wrapper"]}>
        <div className={styles["icon-wrapper"]}>
          <img src={email} alt="" />
        </div>
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
  );
};

export default ContactForm;

// import React from "react";
// const ContactForm = () => {
//   const [formStatus, setFormStatus] = React.useState("Send");
//   const onSubmit = (e) => {
//     e.preventDefault();
//     setFormStatus("Submitting...");
//     const { name, email, message } = e.target.elements;
//     let conFom = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     console.log(conFom);
//   };
//   return (
//     <div className="form-wrapper">
//       <span>Let's work together</span>
//       <form onSubmit={onSubmit}>
//         <div className="name">
//           <label className="form-label" htmlFor="name">
//             Name
//           </label>
//           <input className="form-control" type="text" id="name" required />
//         </div>
//         <div className="email">
//           <label className="form-label" placeholder="Email" htmlFor="email">
//             Email
//           </label>
//           <input className="form-control" type="email" id="email" required />
//         </div>
//         <div className="message">
//           <label
//             className="form-label"
//             placeholder="Message"
//             htmlFor="message"
//           ></label>
//           <textarea className="form-control" id="message" required />
//         </div>
//         <button className="btn btn-danger" type="submit">
//           {formStatus}
//         </button>
//       </form>
//     </div>
//   );
// };
// export default ContactForm;
