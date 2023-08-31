import ImgHalfLeft from "../components/ImgHalfLeft";
import PersonCard from "../components/PersonCard";
import LargeImgSection from "../components/LargeImgSection";
import Button from "../components/Button";
import ThreeColImgs from "../components/ThreeColImgs";

import darinAndBetsy from "../assets/images/darin-and-betsy.jpg";
import darinInstructing from "../assets/images/darin-instructing.jpg";

import darin from "../assets/images/darin-eckton.jpeg";
import betsy from "../assets/images/betsy-eckton.jpg";
import troy from "../assets/images/troy-carter.jpeg";

import motivImg1 from "../assets/images/children1.jpg";
import motivImg2 from "../assets/images/darin-and-elder.jpg";
import motivImg3 from "../assets/images/woman1.jpg";
import motivImg4 from "../assets/images/woman-and-children.jpg";
import motivImg5 from "../assets/images/stacy-and-troy.jpg";
import motivImg6 from "../assets/images/darin-and-betsy.jpg";

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
        <ImgHalfLeft img={darinAndBetsy} alt="">
          <h1>Who We Are</h1>
          <p>
            Our mission is to pursue educational and developmental opportunities
            in such a way that all are edified, the teacher and the learner, the
            recipient and the giver, with a focus on Tailored Accountability,
            Mentoring and Service.
          </p>
        </ImgHalfLeft>

        <div className="person-cards">
          <h2>Our People</h2>
          <p>
            We are all unpaid volunteers,
            <br /> dedicated to making a difference.
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
          <p>Creating TEAMS provides:</p>
          <ul>
            <li>Organizational and tax structure</li>
            <li>Formation according to our charter</li>
            <li>Mentoring, web presence, and accountability</li>
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
