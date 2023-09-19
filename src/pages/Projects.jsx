import LargeImgSection from "../components/LargeImgSection";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ProjTeam from "../components/ProjTeam";

import teamsList from "../teams.json";

import darinExplain from "/assets/images/darin-explaining.jpg";
import soccer from "/assets/images/belle-maluf-xupZLJZ1RB8-unsplash.jpg";
import nepalGroup from "/assets/images/nepal-group.jpg";

import { useEffect } from "react";

const teams = teamsList.teams.map((team) => {
  return {
    name: team.teamName,
    img: team.bgImg,
    type: team.teamStatus,
    page: `/team/${team.teamId}`,
  };
});

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
          We have active TEAMS, alumni TEAMS, and people are creating their own
          new TEAMS. We hope that individuals, families, interns, and others
          will want to get involved so they can do more good in the world!
        </p>
      </LargeImgSection>

      <div className="teams-list-container">
        <div className="active teams-container">
          <div className="header-container">
            <h2>Active</h2>
          </div>
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
          <div className="header-container">
            <h2>Alumni</h2>
          </div>
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
