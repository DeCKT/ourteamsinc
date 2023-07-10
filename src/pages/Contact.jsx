import { Link } from "react-router-dom";
import Form from "../components/Form";

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
];

function Contact() {
  return (
    <div className="body-content">
      <div className="form-description">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
        <p>
          Have an idea for a project? Click <Link>here</Link> to submit an
          application.
        </p>
      </div>
      <Form pages={contactPage}>
        <h5>Thank you for your message!</h5>
        <p>
          We will be in touch soon. In the meantime, check out some of our
          current projects <Link>here</Link>!
        </p>
      </Form>
    </div>
  );
}

export default Contact;
