import { useState } from "react";

export default function Form(props) {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="form-container">
      <div className="form-title-container">
        <h3>{props.title}</h3>
        {props.pages.length > 1 ? (
          <div className="page-indicator">
            Step {activePage}/{props.pages.length}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="form-page">
        {() => {
          switch (page.type) {
            case "email":
              return <input type="email" placeholder="Email Address"></input>;
            case "tel":
              return <input type="tel"></input>;
            case "textarea":
              return <textarea></textarea>;
            default:
              return <input type="text"></input>;
          }
        }}
      </div>
      <div className="form-page">{props.children}</div>
    </div>
  );
}
