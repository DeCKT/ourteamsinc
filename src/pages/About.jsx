import ImgHalfLeft from "../components/ImgHalfLeft";
import PersonCard from "../components/PersonCard";

const people = [
  {
    name: "Darin Eckton",
    img: "darin-eckton.jpeg",
    email: "darin.eckton",
    duties: ["Organization", "Inspiration", "Follow up"],
  },
];

function About() {
  return (
    <>
      <div className="body-content">
        <ImgHalfLeft url="darin-and-betsy.jpg" alt="">
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
      </div>
    </>
  );
}

export default About;
