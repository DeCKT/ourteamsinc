import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProjTeam(props) {
  const [image, setImage] = useState("");
  return (
    <li>
      <Link to={props.page}>
        <img src={props.img} alt="" />
        <div className="team-name">{props.name}</div>
      </Link>
    </li>
  );
}
