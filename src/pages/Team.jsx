import { useParams } from "react-router-dom";
import { useState } from "react";

import { useEffect } from "react";
import ProgBar from "../components/ProgBar";
import ImgHalfLeft from "../components/ImgHalfLeft";
import LargeImgSection from "../components/LargeImgSection";
import MidWidthSection from "../components/MidWidthSection";
import TeamIntro from "../components/TeamIntro";
import ThreeColImgs from "../components/ThreeColImgs";

import teamsList from "../teams.json";

function parseContent(content) {
  if (content[0].includes("|")) {
    return (
      <ul className="indented">
        {content[0].split("|").map((li) => {
          return <li key={content[0].indexOf(li)}>{li}</li>;
        })}
      </ul>
    );
  } else {
    return <p>{content}</p>;
  }
}

function chooseComponent(team, section) {
  switch (section.style) {
    case "ImgHalfLeft":
      return (
        <ImgHalfLeft
          key={team.sections.indexOf(section)}
          img={`../src/assets/images/${section.images}`}
        >
          {section.header != null ? <h2>{section.header}</h2> : null}
          {section.content != null ? <p>{section.content}</p> : null}
        </ImgHalfLeft>
      );
    case "ThreeColImgs":
      return (
        <ThreeColImgs
          key={team.sections.indexOf(section)}
          imgs={imgArrayHelper(section.images)}
        ></ThreeColImgs>
      );
    case "MidWidthSection":
      return (
        <MidWidthSection key={team.sections.indexOf(section)}>
          {section.header != null ? <h2>{section.header}</h2> : null}
          {section.content != null ? <p>{section.content}</p> : null}
        </MidWidthSection>
      );
    case "LargeImgSection":
      return (
        <LargeImgSection
          key={team.sections.indexOf(section)}
          img={`../src/assets/images/${section.images}`}
        >
          {section.header != null ? <h2>{section.header}</h2> : null}
          {section.content != null ? parseContent(section.content) : null}
        </LargeImgSection>
      );
    default:
      console.log(`Section style ${section.style} cannot be parsed`);
      break;
  }
}

function imgArrayHelper(array) {
  return array.map((url) => {
    return `../src/assets/images/${url}`;
  });
}

export default function Team() {
  const [team, setTeam] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { teamId } = useParams();

  useEffect(() => {
    const selectedTeam = teamsList.teams.find((team) => team.teamId === teamId);

    if (selectedTeam) {
      setTeam(selectedTeam);
      setLoaded(true);
      document.title = `${selectedTeam.teamName} | Our TEAMS`;
      window.scrollTo(0, 0);
    } else {
      console.error(`Team with ID ${teamId} not found`);
      setLoaded(true); // Mark as loaded even if the team is not found
    }
  }, [teamId]);

  if (!loaded) {
    return <div>Loading...</div>;
  } else if (!team.teamId) {
    return <div>Could not find that team</div>;
  }

  return (
    <div className="team-page">
      <div className="intro-container">
        <TeamIntro
          bgImg={team.bgImg}
          teamName={team.teamName}
          desc={team.desc}
          donate={team.donate}
          volunteer={team.volunteer}
        />
      </div>
      <div className="body-content">
        <ProgBar goal={team.goal} prog={team.progress} subs={team.subgoals} />
        <div className="team-sections">
          {team.sections.map((sect) => {
            return chooseComponent(team, sect);
          })}
        </div>
      </div>
    </div>
  );
}
