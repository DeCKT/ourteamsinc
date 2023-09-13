import { useEffect, useState } from "react";

import Button from "./Button";

export default function TeamIntro(props) {
  const [image, setImage] = useState("");

  const bgImg = `url(/assets/images/${props.bgImg})`;

  return (
    <>
      <div className="fullpage" style={{ backgroundImage: bgImg }}></div>
      <div className="team-intro">
        <h1>{props.teamName}</h1>
        <p>{props.desc}</p>
        {props.donate || props.volunteer ? (
          <div className="intro-btn-container">
            {props.donate ? <Button>Donate</Button> : null}
            {props.volunteer ? <Button outlined>Volunteer</Button> : null}
          </div>
        ) : null}
      </div>
    </>
  );
}
