import { useEffect, useState } from "react";
import Image from "./Image";

function ThreeColImgs(props) {
  return (
    <div className="three-col-container">
      {props.imgs.map((img) => {
        return <Image key={props.imgs.indexOf(img)} img={img} />;
      })}
    </div>
  );
}

export default ThreeColImgs;
