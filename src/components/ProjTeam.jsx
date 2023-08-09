import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProjTeam(props) {
  const [image, setImage] = useState("");
  useEffect(() => {
    const fetchImg = async () => {
      try {
        const resp = await import(
          `../assets/images/${props.img}` /* @vite-ignore */
        );
        setImage(resp.default);
      } catch (err) {
        console.error(err);
      }
    };
    fetchImg();
  }, [props.img]);
  return (
    <li>
      <Link to="">
        <img src={image} alt="" />
        <div className="team-name">{props.name}</div>
      </Link>
    </li>
  );
}
