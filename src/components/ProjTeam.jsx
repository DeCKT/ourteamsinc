import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProjTeam(props) {
  return (
    <li>
      <Link to={props.page}>
        <img src={`/assets/images/${props.img}`} alt="" />
        <div className="team-name">{props.name}</div>
      </Link>
    </li>
  );
}
