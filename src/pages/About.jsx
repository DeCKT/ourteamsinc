import ImgHalfLeft from "../components/ImgHalfLeft";
import PersonCard from "../components/PersonCard";
import LargeImgSection from "../components/LargeImgSection";
import Button from "../components/Button";
import ThreeColImgs from "../components/ThreeColImgs";

import { useEffect } from "react";

const people = [
  {
    name: "Darin Eckton",
    img: "darin-eckton.jpeg",
    email: "darin.eckton",
    duties: ["Organization", "Inspiration", "Follow up"],
  },
  {
    name: "Betsy Eckton",
    img: "betsy-eckton.jpg",
    email: "betsy.eckton",
    duties: ["History", "Legal", "Motivator"],
  },
  {
    name: "Troy Carter",
    img: "troy-carter.jpeg",
    email: "troy.carter",
    duties: ["Team Mentoring", "Progress"],
  },
];

const motivationImgs = [
  "children1.jpg",
  "darin-and-elder.jpg",
  "woman1.jpg",
  "woman-and-children.jpg",
  "stacy-and-troy.jpg",
  "darin-and-betsy.jpg",
];

function About() {
  document.title = "Who We Are | Our TEAMS";

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="body-content">
        <ImgHalfLeft img="darin-and-betsy.jpg" alt="">
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

        <LargeImgSection img="darin-instructing.jpg">
          <h2>Our Structure</h2>
          <p>Creating TEAMS provides:</p>
          <ul>
            <li>Organizational and tax structure</li>
            <li>Formation according to our charter</li>
            <li>Mentoring, web presence, and accountability</li>
          </ul>

          <Button>Apply Now</Button>
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
