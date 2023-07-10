import { useState } from "react";
import Button from "./Button";

export default function Form(props) {
  const [activePage, setActivePage] = useState(1);

  const checkInput = (input) => {
    console.log(input);
    if (input === "First Name" || input === "Last Name") {
      console.log(`input equals ${input}`);
      return true;
    }
    return false;
  };

  const renderInputs = (input, key) => {
    switch (input.type) {
      case "email":
        return (
          <input
            type="email"
            placeholder={input.text}
            key={key}
            className={checkInput(input.text) ? "half-input" : "full-input"}
          />
        );
      case "tel":
        return (
          <input
            type="tel"
            placeholder={input.text}
            key={key}
            className={checkInput(input.text) ? "half-input" : "full-input"}
          />
        );
      case "textarea":
        return <textarea placeholder={input.text} key={key}></textarea>;
      default:
        return (
          <input
            type="text"
            placeholder={input.text}
            key={key}
            className={checkInput(input.text) ? "half-input" : "full-input"}
          />
        );
    }
  };

  return (
    <div className="form-container">
      {props.pages.map((page) => {
        return (
          <div className="form" key={props.pages.indexOf(page)}>
            <div className="form-title-container">
              <h3>{page.pageTitle}</h3>
              {props.pages.length > 1 ? (
                <span className="page-indicator">
                  Step {props.pages.indexOf(page) + 1}/{props.pages.length}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div key={props.pages.indexOf(page)} className="form-page">
              {page.fields.map((field) => {
                let key = page.fields.indexOf(field);
                return renderInputs(field, key);
              })}
              <div className="form-button-container">
                {props.pages.indexOf(page) + 1 == props.pages.length ? (
                  <Button>Submit</Button>
                ) : (
                  <Button>Next</Button>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <div className="form-page thanks-page">{props.children}</div>
    </div>
  );
}
