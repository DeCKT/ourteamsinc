import { useState } from "react";
import { Link } from "react-router-dom";

export default function Pin(props) {
  const [hover, setHover] = useState(false);

  const toLeft = (val) => {
    if (val >= 60) {
      return "to-left";
    } else {
      return "to-right";
    }
  };

  return (
    <div
      className="pin"
      style={{
        position: "absolute",
        top: `${props.pin.pinTop}%`,
        left: `${props.pin.pinLeft}%`,
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={`/team/${props.pin.teamId}`}>
        <svg
          fill={!props.pin.active ? "#e91e24" : "#51AA1A"}
          width="40px"
          height="40px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zm0 7.751a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4z" />
        </svg>
      </Link>
      <div
        className={`pin-hover ${hover ? "hovered" : ""} ${toLeft(
          props.pin.pinLeft
        )}`}
      >
        <img src={`/assets/images/${props.pin.teamPic}`} alt="" />
        <h3>{props.pin.teamName}</h3>
      </div>
    </div>
  );
}
