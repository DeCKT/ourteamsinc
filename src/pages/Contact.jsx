import { Link } from "react-router-dom";
import Form from "../components/Form";
import { useEffect } from "react";

const confMsg = () => {
  return (
    <>
      <h5>Thank you for your message!</h5>
      <p>
        We will be in touch soon. In the meantime, check out some of our current
        projects <Link to="/what-were-doing">here</Link>!
      </p>
    </>
  );
};

console.log(confMsg);

const contactPage = [
  {
    pageTitle: "Message",
    fields: [
      {
        type: "email",
        text: "Email Address",
      },
      { type: "textarea", text: "Type your message here..." },
    ],
  },
  { pageTitle: "Submitted", message: confMsg() },
];

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="body-content">
      <div className="form-description">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
        <p>
          Have an idea for a project? Click{" "}
          <Link to="/teams-application">here</Link> to submit an application.
        </p>
      </div>
      <Form pages={contactPage}></Form>
    </div>
  );
}

export default Contact;
