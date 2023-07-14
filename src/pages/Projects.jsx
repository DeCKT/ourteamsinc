import LargeImgSection from "../components/LargeImgSection";
import Button from "../components/Button";
import { Link } from "react-router-dom";

import darinExplaining from "../assets/images/darin-explaining.jpg";
import soccerImg from "../assets/images/belle-maluf-xupZLJZ1RB8-unsplash.jpg";
import cleanProject from "../assets/images/cleanup-project.jpg";

const teams = [
  {
    name: "New Life International",
    img: darinExplaining,
    type: "Active",
  },
  {
    name: "Jukwa Liverpool",
    img: soccerImg,
    type: "Alumni",
  },
];

// Photo by <a href="https://unsplash.com/@bellemaluf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Belle Maluf</a> on <a href="https://unsplash.com/photos/xupZLJZ1RB8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

function Projects() {
  document.title = `What We're Doing | Our TEAMS`;

  return (
    <div className="body-content">
      <LargeImgSection img={cleanProject}>
        <h1>TEAMS</h1>
        <p>
          We have a variety of active TEAMS and opportunities to create new
          TEAMS, alumni TEAMS, service ideas for individuals and groups wanting
          to do good, and unpaid internships for high school or college students
          who would like to get involved in a completely non-profit organization
        </p>
      </LargeImgSection>

      <div className="teams-list-container">
        <div className="active teams-container">
          <h2>Active</h2>
          <ul>
            {teams
              .filter((team) => team.type === "Active")
              .map((team) => (
                <li key={team.name}>
                  <Link to="">
                    <img src={`src/assets/images/${team.img}`} />
                    <div className="team-name">{team.name}</div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="inactive teams-container">
          <h2>Alumni</h2>
          <ul>
            {teams
              .filter((team) => team.type === "Alumni")
              .map((team) => (
                <li key={team.name}>
                  <Link to="">
                    <img src={`src/assets/images/${team.img}`} />
                    <div className="team-name">{team.name}</div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <LargeImgSection type="left" img="nepal-group.jpg">
        <h2>TEAMS Creation</h2>
        <p>
          Do you have an idea for a service project which could benefit from our
          organization? We would love to work with you!
        </p>
        <Button>Apply Now</Button>
      </LargeImgSection>
    </div>
  );
}

export default Projects;
