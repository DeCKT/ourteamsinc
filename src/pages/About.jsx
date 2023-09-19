import ImgHalfLeft from "../components/ImgHalfLeft";
import PersonCard from "../components/PersonCard";
import LargeImgSection from "../components/LargeImgSection";
import Button from "../components/Button";
import ThreeColImgs from "../components/ThreeColImgs";

import darinAndBetsy from "/assets/images/darin-and-betsy.jpg";
import darinInstructing from "/assets/images/darin-instructing.jpg";

import darin from "/assets/images/darin-eckton.jpeg";
import betsy from "/assets/images/betsy-eckton.jpg";
import troy from "/assets/images/troy-carter.jpeg";

import motivImg1 from "/assets/images/children1.jpg";
import motivImg2 from "/assets/images/darin-and-elder.jpg";
import motivImg3 from "/assets/images/woman1.jpg";
import motivImg4 from "/assets/images/woman-and-children.jpg";
import motivImg5 from "/assets/images/stacy-and-troy.jpg";
import motivImg6 from "/assets/images/darin-and-betsy.jpg";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const people = [
  {
    name: "Darin Eckton",
    img: darin,
    email: "darin.eckton",
    duties: ["Organization", "Inspiration", "Follow up"],
  },
  {
    name: "Betsy Eckton",
    img: betsy,
    email: "betsy.eckton",
    duties: ["History", "Legal", "Motivator"],
  },
  {
    name: "Troy Carter",
    img: troy,
    email: "troy.carter",
    duties: ["Team Mentoring", "Progress"],
  },
];

const motivationImgs = [
  motivImg1,
  motivImg2,
  motivImg3,
  motivImg4,
  motivImg5,
  motivImg6,
];

function About() {
  useEffect(() => {
    document.title = "Who We Are | Our TEAMS";
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="body-content">
        {/* <ImgHalfLeft img={darinAndBetsy} alt="">
          <h1>Who We Are</h1>
          <p>
            Our mission is to help individuals, families, and other groups to
            use our non-profit organization to create their own educational or
            other developmental projects throughout the world.
          </p>
        </ImgHalfLeft> */}
        <ImgHalfLeft
          img="https://drive.google.com/uc?id=1hQVXLhOi2zIh3C4dc16tIkrAxYRflxyp"
          alt=""
        >
          <h1>Who We Are</h1>
          <p>
            Our mission is to help individuals, families, and other groups to
            use our non-profit organization to create their own educational or
            other developmental projects throughout the world.
          </p>
        </ImgHalfLeft>

        <div className="person-cards">
          <h2>Our People</h2>
          <p>
            We are all unpaid volunteers who donate their time to help others
            make a difference.
          </p>
          <div className="card-container">
            {people.map((person) => {
              return (
                <PersonCard
                  img={person.img}
                  name={person.name}
                  email={person.email}
                  duties={person.duties}
                  key={person.name}
                />
              );
            })}
          </div>
        </div>

        <LargeImgSection img={darinInstructing}>
          <h2>Our Structure</h2>
          <p>Create your own TEAM</p>
          <ul>
            <li>
              Have a project that is educational or developmental in nature?
            </li>
            <li>Use our 501c3 tax-exempt status for your project</li>
            <li>We’ll provide mentoring, accountability, and advertisement</li>
          </ul>

          <Link to="/teams-application" className="btn">
            Apply Now
          </Link>
        </LargeImgSection>

        <div className="motivation-img-container">
          <h2 className="center-text">Our Motivation</h2>
          <ThreeColImgs imgs={motivationImgs}></ThreeColImgs>
        </div>
      </div>
    </>
  );
}

export default About;
