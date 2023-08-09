import ImgHalfLeft from "../components/ImgHalfLeft";
import MidWidthSection from "../components/MidWidthSection";
import Button from "../components/Button";

import nepalGroup from "../assets/images/nepal-group-before.jpg";
import { useEffect } from "react";

const displayTeams = [
  {
    name: "Bethesda",
    desc: "Assist students with limited to no financial ability to more effectively endure the challenges associated with losing a child.",
    type: "donate",
    page: "bethesda",
  },
  {
    name: "New Life International",
    desc: "We are helping to build New Life International Orphanage a secondary school to improve educational opportunities.",
    type: "donate",
    page: "new-life-intl",
  },
  {
    name: "Vanuatu Med",
    desc: "Prepare and provide pediatric resources and training to doctors in Vanuatu according to their needs and desires.",
    type: "volunteer",
    page: "vanuatu-med",
  },
  {
    name: "Mobia Village",
    desc: "Provide the people of Mobia Village in Ghana with proper community structure and shelter.",
    type: "volunteer",
    page: "mobia-village",
  },
];

function Help() {
  useEffect(() => {
    document.title = "Make A Difference | Our TEAMS";
    window.scrollTo(0, 0);
  });

  return (
    <div className="body-content">
      <ImgHalfLeft img="nepal-group-before.jpg">
        <h1>Make A Difference</h1>
        <p>
          We offer a variety of ways that you can make a difference, from
          monetary or material donations, to time spent educating, mentoring and
          serving individuals and communities.
        </p>
      </ImgHalfLeft>

      <div className="make-a-diff-container">
        <MidWidthSection>
          <h2>Donate</h2>
          <p>
            We are a strictly non-profit organization. 100% of all donations go
            directly to projects within the Our TEAMS organization.
          </p>
        </MidWidthSection>

        <div className="action-teams-container border-bottom">
          <ul>
            <li className="team-block">
              <h3>General Fund</h3>
              <p>
                Support our extremely low overhead as well as scholarships for
                TEAMS that apply and meet the criteria.
              </p>
              <div className="buttons">
                <Button>Donate</Button>
              </div>
            </li>
            {displayTeams
              .filter((team) => team.type === "donate")
              .map((team) => {
                return (
                  <li className="team-block" key={displayTeams.indexOf(team)}>
                    <h3>{team.name}</h3>
                    <p>{team.desc}</p>
                    <div className="buttons">
                      <Button>Donate</Button>
                      <Button outlined>Learn More</Button>
                    </div>
                  </li>
                );
              })}
            <li className="application-block">
              New TEAM
              <br />
              Application<span>+</span>
            </li>
          </ul>
        </div>

        <MidWidthSection>
          <h2>Volunteer</h2>
          <p>
            Donate your time and talents by joining existing TEAMS, or create
            your own TEAM and help us to truly make a difference.
          </p>
        </MidWidthSection>

        <div className="action-teams-container">
          <ul>
            {displayTeams
              .filter((team) => team.type === "volunteer")
              .map((team) => {
                return (
                  <li className="team-block" key={displayTeams.indexOf(team)}>
                    <h3>{team.name}</h3>
                    <p>{team.desc}</p>
                    <div className="buttons">
                      <Button>Volunteer</Button>
                      <Button outlined>Learn More</Button>
                    </div>
                  </li>
                );
              })}
            <li className="application-block">
              New TEAM Application<span>+</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Help;
