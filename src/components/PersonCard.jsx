import emailSvg from "/assets/email-svgrepo-com.svg";
import { useEffect, useState } from "react";

const PersonCard = (props) => {
  const [image, setImage] = useState("");

  return (
    <div className="person-card">
      <img src={props.img} alt={props.name} className="person-img" />
      <div className="info-container">
        <h4 className="card-name">{props.name}</h4>
        <a href={`mailto:${props.email}@ourteamsinc.org`}>
          <img className="email-icon" src={emailSvg} />
        </a>
      </div>

      <ul className="duties">
        {props.duties.map((duty) => {
          return <li key={duty}>{duty}</li>;
        })}
      </ul>
    </div>
  );
};

export default PersonCard;
