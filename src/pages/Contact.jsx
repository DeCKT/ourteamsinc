import { Link } from "react-router-dom";
import Form from "../components/Form";
import { useEffect, useState } from "react";

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

const contactPage = [
  {
    pageTitle: "Message",
    fields: [
      {
        type: "email",
        text: "Email Address",
        objKey: "msgEmail",
      },
      {
        type: "textarea",
        text: "Type your message here...",
        objKey: "msgContent",
      },
    ],
  },
  { pageTitle: "Submitted", message: confMsg() },
];

const fieldIds = ["msgEmail", "msgContent"];

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Contact Us | Our TEAMS`;
  });

  const [form, setForm] = useState({});

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
      <Form pages={contactPage} setForm={setForm} fieldIds={fieldIds}></Form>
    </div>
  );
}

export default Contact;
