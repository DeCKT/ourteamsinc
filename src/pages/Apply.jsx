import Form from "../components/Form";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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
      { type: "text", text: "First Name", id: "firstName" },
      { type: "text", text: "Last Name", id: "lastName" },
      { type: "email", text: "Email Address", id: "emailAddr" },
      { type: "tel", text: "Phone Number", id: "phoneNum" },
    ],
  },
  {
    pageTitle: "Project Goals/Desired Outcomes",
    fields: [
      {
        type: "textarea",
        text: "What are you hoping to accomplish?",
        id: "projGoals",
      },
    ],
  },
  {
    pageTitle: "How Will You Accomplish Your Goals/Outcomes?",
    fields: [{ type: "textarea", text: "What is your plan?", id: "projPlan" }],
  },
  {
    pageTitle: "Anticipated Timeline",
    fields: [
      {
        type: "textarea",
        text: "What are your target dates?",
        id: "projTimeline",
      },
    ],
  },
  {
    pageTitle: "Application Submitted",
    message: submitMsg(),
  },
];

const respFields = {
  firstName: "firstName",
  lastName: "lastName",
  email: "emailAddr",
  phone: "phoneNum",
  goals: "projGoals",
  plan: "projPlan",
  timeline: "projTimeline",
};

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
      <Form pages={applicationPages} resp={respFields}></Form>
    </div>
  );
}

export default Apply;
