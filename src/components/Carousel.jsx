import Button from "./Button";
import { useEffect, useState } from "react";
import cslImg1 from "../assets/images/darin-and-children.jpg";
import cslImg2 from "../assets/images/darin-explaining.jpg";
import cslImg3 from "../assets/images/darin-sharing.jpg";
import cslImg4 from "../assets/images/group-patching.jpg";
import cslImg5 from "../assets/images/medical-help.jpg";

const stuff = [
  {
    img: cslImg1,
    desc: "Orphanage students provided with secondary school",
    btn: "Read Story",
    pos: "50% 30%",
  },
  {
    img: cslImg2,
    desc: "Rebuilding a community torn apart by natural disasters",
    btn: "Santa Isabel TEAM",
    pos: "50% 50%",
  },
  {
    img: cslImg3,
    desc: "Medical services provided to remote communities",
    btn: "Support TEAM",
    pos: "50% 50%",
  },
  {
    img: cslImg4,
    desc: "Village in Ghana provided with needed resources",
    btn: "Read Story",
    pos: "50% 50%",
  },
  {
    img: cslImg5,
    desc: "School supplies enable children to pursue education",
    btn: "Donate Supplies",
    pos: "50% 50%",
  },
];

export default function Carousel() {
  const [slides, setSlides] = useState(stuff);
  const [active, setActive] = useState(0);

  const prevSlide = () => {
    if (active <= 0) {
      setActive(4);
    } else {
      setActive(active - 1);
    }
  };

  const nextSlide = () => {
    if (active >= 4) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [active]);

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
      <div className="carousel-controls">
        <button onClick={() => prevSlide()}>
          <svg width="32px" height="32px" viewBox="7 5 13 13">
            <path
              d="M13.75 16.25C13.6515 16.2505 13.5538 16.2313 13.4628 16.1935C13.3718 16.1557 13.2893 16.1001 13.22 16.03L9.72001 12.53C9.57956 12.3894 9.50067 12.1988 9.50067 12C9.50067 11.8013 9.57956 11.6107 9.72001 11.47L13.22 8.00003C13.361 7.90864 13.5285 7.86722 13.6958 7.88241C13.8631 7.89759 14.0205 7.96851 14.1427 8.08379C14.2649 8.19907 14.3448 8.35203 14.3697 8.51817C14.3946 8.68431 14.363 8.85399 14.28 9.00003L11.28 12L14.28 15C14.4205 15.1407 14.4994 15.3313 14.4994 15.53C14.4994 15.7288 14.4205 15.9194 14.28 16.06C14.1353 16.1907 13.9448 16.259 13.75 16.25Z"
              fill="#000000"
            />
          </svg>
        </button>
        {stuff.map((slide) => {
          return (
            <button
              key={stuff.indexOf(slide)}
              onClick={() => setActive(stuff.indexOf(slide))}
            >
              <svg
                fill={active === stuff.indexOf(slide) ? "#44466d" : "#e6dcdcdc"}
                width="32px"
                height="32px"
                viewBox="-4 -5 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" />
              </svg>
            </button>
          );
        })}
        <button onClick={() => nextSlide()}>
          <svg
            width="32px"
            height="32px"
            viewBox="7 5 13 13"
            style={{ transform: "scale(-1, 1)" }}
          >
            <path
              d="M13.75 16.25C13.6515 16.2505 13.5538 16.2313 13.4628 16.1935C13.3718 16.1557 13.2893 16.1001 13.22 16.03L9.72001 12.53C9.57956 12.3894 9.50067 12.1988 9.50067 12C9.50067 11.8013 9.57956 11.6107 9.72001 11.47L13.22 8.00003C13.361 7.90864 13.5285 7.86722 13.6958 7.88241C13.8631 7.89759 14.0205 7.96851 14.1427 8.08379C14.2649 8.19907 14.3448 8.35203 14.3697 8.51817C14.3946 8.68431 14.363 8.85399 14.28 9.00003L11.28 12L14.28 15C14.4205 15.1407 14.4994 15.3313 14.4994 15.53C14.4994 15.7288 14.4205 15.9194 14.28 16.06C14.1353 16.1907 13.9448 16.259 13.75 16.25Z"
              fill="#000000"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
