import Form from "../components/Form";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const applicationPages = [
  {
    pageTitle: "Personal Information",
    fields: [
      { type: "text", text: "First Name" },
      { type: "text", text: "Last Name" },
      { type: "email", text: "Email Address" },
      { type: "tel", text: "Phone Number" },
    ],
  },
  {
    pageTitle: "Project Goals/Desired Outcomes",
    fields: [{ type: "textarea", text: "What are you hoping to accomplish?" }],
  },
  {
    pageTitle: "How Will You Accomplish Your Goals/Outcomes?",
    fields: [{ type: "textarea", text: "What is your plan?" }],
  },
  {
    pageTitle: "Anticipated Timeline",
    fields: [{ type: "textarea", text: "What are your target dates?" }],
  },
];

function Apply() {
  useEffect(() => {
    document.title = "Application | Our TEAMS Inc";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="body-content">
      <div className="form-description">
        <h1>Create TEAMS</h1>
        <p>
          Have an idea for a project that is educational or developmental in any
          part of the world? We would love to work with you! Join Our TEAMS and
          let us help <i>you</i> make a difference!
        </p>
        <br></br>
        <p>
          To help you prepare to fill out this application, we will ask you
          about the following four items:
        </p>
        <ul className="indented">
          <li>Personal Information</li>
          <li>Project Goals/Desired Outcomes</li>
          <li>How You Will Accomplish Your Goals/Outcomes</li>
          <li>Anticipated Timeline</li>
        </ul>
        <div className="help-needed">
          (If you have any questions about the application, please email{" "}
          <a href="mailto:admin@ourteamsinc.org">admin@ourteamsinc.org</a>)
        </div>
      </div>
      <Form pages={applicationPages}>
        <h5>Thank you for your application!</h5>
        <p>
          We're excited to see how we can work together to improve lives! We
          will be reviewing your application, and will reach out soon. In the
          meantime, consider donating to one of our existing TEAMS{" "}
          <Link>here</Link>!
        </p>
      </Form>
    </div>
  );
}

export default Apply;
