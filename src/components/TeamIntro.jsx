import { useEffect, useState } from "react";

import Button from "./Button";

export default function TeamIntro(props) {
  const [image, setImage] = useState("");
  // useEffect(() => {
  //   const fetchImg = async () => {
  //     try {
  //       const resp = await import(
  //         `../assets/images/${props.bgImg}` /* @vite-ignore */
  //       );
  //       setImage(resp.default);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchImg();
  // }, [props]);

  return (
    <>
      <div
        className="fullpage"
        style={{ backgroundImage: `url(${props.bgImg})` }}
      ></div>
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
