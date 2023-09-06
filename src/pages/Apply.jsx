import Form from "../components/Form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const submitMsg = () => {
  return (
    <>
      <h5>Thank you for your application!</h5>
      <p>
        We're excited to see how we can work together to improve lives! We will
        be reviewing your application, and will reach out soon. In the meantime,
        consider donating to one of our existing TEAMS{" "}
        <Link to="/make-a-difference">here</Link>!
      </p>
    </>
  );
};

const applicationPages = [
  {
    pageTitle: "Personal Information",
    fields: [
      { type: "text", text: "First Name", objKey: "firstName" },
      { type: "text", text: "Last Name", objKey: "lastName" },
      { type: "email", text: "Email Address", objKey: "emailAddr" },
      { type: "tel", text: "Phone Number", objKey: "phoneNum" },
    ],
  },
  {
    pageTitle: "Project Goals/Desired Outcomes",
    fields: [
      {
        type: "textarea",
        text: "What are you hoping to accomplish?",
        objKey: "projGoals",
      },
    ],
  },
  {
    pageTitle: "How Will You Accomplish Your Goals/Outcomes?",
    fields: [
      { type: "textarea", text: "What is your plan?", objKey: "projPlan" },
    ],
  },
  {
    pageTitle: "Anticipated Timeline",
    fields: [
      {
        type: "textarea",
        text: "What are your target dates?",
        objKey: "projTimeline",
      },
    ],
  },
  {
    pageTitle: "Application Submitted",
    message: submitMsg(),
  },
];

const fieldIds = [
  "firstName",
  "lastName",
  "emailAddr",
  "phoneNum",
  "projGoals",
  "projPlan",
  "projTimeline",
];

function Apply() {
  useEffect(() => {
    document.title = "Application | Our TEAMS Inc";
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({});

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
      <Form
        pages={applicationPages}
        fieldIds={fieldIds}
        setForm={setForm}
      ></Form>
    </div>
  );
}

export default Apply;
