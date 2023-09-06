import { useEffect, useState } from "react";
import Button from "./Button";

export default function Form(props) {
  const [activePage, setActivePage] = useState(0);
  const [responses, setResponses] = useState({});

  const subForm = () => {
    window.alert(
      `The recorded responses are: ${Object.values(responses).map(
        (resp) => `\n${resp}`
      )}`
    );
    props.setForm(responses);
  };

  const prevPage = () => {
    if (activePage > 0 && activePage <= props.pages.length) {
      setActivePage(activePage - 1);
    } else {
      console.log("unexpected error going to previous page");
    }
  };

  const nextPage = () => {
    if (activePage >= 0 && activePage < props.pages.length) {
      setActivePage(activePage + 1);
    } else {
      console.log("unexpected error going to next page");
    }
  };

  const checkInput = (input) => {
    if (input === "First Name" || input === "Last Name") {
      return true;
    }
    return false;
  };

  const renderInputs = (field, key) => {
    const handleInputChange = (e) => {
      const updatedResponses = { ...responses }; // Create a copy of the responses object
      updatedResponses[field.objKey] = e.target.value; // Update the specific key based on the 'field.objKey' variable
      setResponses(updatedResponses); // Update the state with the new object
    };
    switch (field.type) {
      case "email":
        return (
          <input
            type="email"
            placeholder={field.text}
            key={key}
            onChange={handleInputChange}
            className={checkInput(field.text) ? "half-input" : "full-input"}
          />
        );
      case "tel":
        return (
          <input
            type="tel"
            placeholder={field.text}
            key={key}
            onChange={handleInputChange}
            className={checkInput(field.text) ? "half-input" : "full-input"}
          />
        );
      case "textarea":
        return (
          <textarea
            placeholder={field.text}
            key={key}
            onChange={handleInputChange}
          ></textarea>
        );
      default:
        return (
          <input
            type="text"
            placeholder={field.text}
            key={key}
            onChange={handleInputChange}
            className={checkInput(field.text) ? "half-input" : "full-input"}
          />
        );
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="form-container">
      {props.pages.map((page) => {
        return (
          <div
            className="form"
            key={props.pages.indexOf(page)}
            style={
              props.pages.indexOf(page) == activePage
                ? { zIndex: 1, opacity: 1 }
                : { zIndex: -1, opacity: 0 }
            }
          >
            <div className="form-title-container">
              <h3>{page.pageTitle}</h3>
              {props.pages.length > 2 ? (
                props.pages.indexOf(page) + 1 >
                props.pages.length - 1 ? null : (
                  <span className="page-indicator">
                    Step {props.pages.indexOf(page) + 1}/
                    {props.pages.length - 1}
                  </span>
                )
              ) : null}
            </div>
            <div key={props.pages.indexOf(page)} className="form-page">
              {!page.fields
                ? page.message
                : page.fields.map((field) => {
                    let key = page.fields.indexOf(field);
                    return renderInputs(field, key);
                  })}
              <div className="form-button-container">
                {props.pages.indexOf(page) + 1 > 1 &&
                props.pages.indexOf(page) + 1 < props.pages.length ? (
                  <Button outlined func={() => prevPage()}>
                    Previous
                  </Button>
                ) : null}
                {props.pages.indexOf(page) + 1 == props.pages.length - 1 ? (
                  <Button
                    func={() => {
                      nextPage();
                      subForm();
                    }}
                  >
                    Submit
                  </Button>
                ) : props.pages.indexOf(page) + 1 ==
                  props.pages.length ? null : (
                  <Button func={() => nextPage()}>Next</Button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
