import Button from "./Button";
import { useState } from "react";

const stuff = [
  {
    img: "src/assets/images/darin-and-children.jpg",
    desc: "Orphanage students provided with secondary school",
    btn: "Read Story",
    pos: "50% 30%",
  },
  {
    img: "src/assets/images/darin-explaining.jpg",
    desc: "Rebuilding a community torn apart by natural disasters",
    btn: "Santa Isabel TEAM",
    pos: "50% 50%",
  },
  {
    img: "src/assets/images/darin-sharing.jpg",
    desc: "Medical services provided to remote communities",
    btn: "Support TEAM",
    pos: "50% 50%",
  },
  {
    img: "src/assets/images/group-patching.jpg",
    desc: "Village in Ghana provided with needed resources",
    btn: "Read Story",
    pos: "50% 50%",
  },
  {
    img: "src/assets/images/medical-help.jpg",
    desc: "School supplies enable children to pursue education",
    btn: "Donate Supplies",
    pos: "50% 50%",
  },
];

export default function Carousel() {
  const [slides, setSlides] = useState(stuff);
  const [active, setActive] = useState(0);

  return (
    <>
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${slides[active].img})`,
          backgroundPosition: slides[active].pos,
        }}
      >
        <div className="carousel-content">
          <div className="white-background">
            <p>{slides[active].desc}</p>
            <Button>{slides[active].btn}</Button>
          </div>
        </div>
      </div>
      <div className="carousel-controls">. . .</div>
    </>
  );
}
