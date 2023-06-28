import Form from "../components/Form";
import { Link } from "react-router-dom";

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
    pageTitle: "Project Goals",
    fields: [{ type: "textarea", text: "What are you hoping to accomplish?" }],
  },
  {
    pageTitle: "Process",
    fields: [
      { type: "textarea", text: "How do you expect the project to proceed?" },
    ],
  },
];

function Apply() {
  return (
    <div className="body-content">
      <div className="form-desciption">
        <h1>Create TEAMS</h1>
        <p>
          Have an idea for a project? We would love to work with you! Join Our
          TEAMS and help us make a difference!
        </p>
        <p>Fill out the application below to continue.</p>
      </div>
      <Form pages={applicationPages}>
        <h5>Thank you for your application!</h5>
        <p>
          We're excited to see how we can work together to change the world! We
          will be reviewing your application, and will reach out soon. In the
          meantime, consider donating to one of our existing TEAMS{" "}
          <Link>here</Link>.
        </p>
      </Form>
    </div>
  );
}

export default Apply;
