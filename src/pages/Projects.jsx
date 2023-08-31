import LargeImgSection from "../components/LargeImgSection";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ProjTeam from "../components/ProjTeam";

import darinExplain from "../assets/images/darin-explaining.jpg";
import soccer from "../assets/images/belle-maluf-xupZLJZ1RB8-unsplash.jpg";
import nepalGroup from "../assets/images/nepal-group.jpg";

import { useEffect } from "react";

const teams = [
  {
    name: "New Life International",
    img: darinExplain,
    type: "Active",
    page: "/team/1",
  },
  {
    name: "Jukwa Liverpool",
    img: soccer,
    type: "Alumni",
    page: "/team/10",
  },
];

// Photo by <a href="https://unsplash.com/@bellemaluf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Belle Maluf</a> on <a href="https://unsplash.com/photos/xupZLJZ1RB8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

function Projects() {
  useEffect(() => {
    document.title = `What We're Doing | Our TEAMS`;
    window.scrollTo(0, 0);
  });

  return (
    <div className="body-content">
      <LargeImgSection img={darinExplain}>
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
                <ProjTeam
                  key={teams.indexOf(team)}
                  img={team.img}
                  name={team.name}
                  page={team.page}
                />
              ))}
          </ul>
        </div>
        <div className="inactive teams-container">
          <h2>Alumni</h2>
          <ul>
            {teams
              .filter((team) => team.type === "Alumni")
              .map((team) => (
                <ProjTeam
                  key={teams.indexOf(team)}
                  img={team.img}
                  name={team.name}
                  page={team.page}
                />
              ))}
          </ul>
        </div>
      </div>

      <LargeImgSection type="left" img={nepalGroup}>
        <h2>TEAMS Creation</h2>
        <p>
          Do you have an idea for a service project which could benefit from our
          organization? We would love to work with you!
        </p>
        <Link to="/teams-application" className="btn">
          Apply Now
        </Link>
      </LargeImgSection>
    </div>
  );
}

export default Projects;
