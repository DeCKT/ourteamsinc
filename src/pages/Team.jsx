import { useParams } from "react-router-dom";

import { useEffect } from "react";
import ProgBar from "../components/ProgBar";
import ImgHalfLeft from "../components/ImgHalfLeft";
import LargeImgSection from "../components/LargeImgSection";
import MidWidthSection from "../components/MidWidthSection";
import TeamIntro from "../components/TeamIntro";
import ThreeColImgs from "../components/ThreeColImgs";

// example team data
const exTeam = {
  teamId: "1",
  teamName: "New Life International",
  desc: "We are aiming to raise $35,000 to help complete construction of the New life International Orphanage secondary school.",
  bgImg: "darin-and-children.jpg",
  donate: "donate-url",
  volunteer: "volunteer-url",
  goal: 35000,
  progress: 29402,
  subgoals: [
    { amount: 15000, purpose: "Finish Walls and Roof" },
    { amount: 30000, purpose: "Pave Surrounding Area" },
  ],
  sections: [
    {
      header: "About",
      content: [
        "New Life International Orphanage is a charitable organization focused on providing orphans with enhanced educational opportunities. New Life International Orphanage aims to create a brighter future for orphaned children by providing them with a dedicated educational facility.",
      ],
      images: ["cleanup-project.jpg"],
      style: "ImgHalfLeft",
    },
    {
      header: null,
      content: [
        "New Life International Orphanage is a charitable organization focused on providing orphans with enhanced educational opportunities. Their mission centers around building a physical school that offers quality education to empower these children and enable them to break the cycle of poverty. Through this initiative, New Life International Orphanage aims to create a brighter future for orphaned children by providing them with a dedicated educational facility.",
      ],
      image: null,
      style: "MidWidthSection",
    },
    {
      header: null,
      content: null,
      images: [
        "newlife-progress.jpg",
        "newlife-progress1.jpg",
        "newlife-progress2.jpg",
      ],
      style: "ThreeColImgs",
    },
    {
      header: "Goals",
      content: [
        "Complete construction|Clean and secure surrounding area|Educate and edify teachers",
      ],
      images: ["cleanup-project.jpg"],
      style: "LargeImgSection",
    },
  ],
};

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

function chooseComponent(section) {
  switch (section.style) {
    case "ImgHalfLeft":
      return (
        <ImgHalfLeft
          key={exTeam.sections.indexOf(section)}
          img={section.images}
        >
          {section.header != null ? <h2>{section.header}</h2> : null}
          {section.content != null ? <p>{section.content}</p> : null}
        </ImgHalfLeft>
      );
    case "ThreeColImgs":
      return (
        <ThreeColImgs
          key={exTeam.sections.indexOf(section)}
          imgs={section.images}
        ></ThreeColImgs>
      );
    case "MidWidthSection":
      return (
        <MidWidthSection key={exTeam.sections.indexOf(section)}>
          {section.header != null ? <h2>{section.header}</h2> : null}
          {section.content != null ? <p>{section.content}</p> : null}
        </MidWidthSection>
      );
    case "LargeImgSection":
      return (
        <LargeImgSection
          key={exTeam.sections.indexOf(section)}
          img={section.images[0]}
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

export default function Team() {
  useEffect(() => {
    document.title = `${exTeam.teamName} | Our TEAMS`;
    window.scrollTo(0, 0);
  });

  return (
    <div className="team-page">
      <div className="intro-container">
        <TeamIntro
          bgImg={exTeam.bgImg}
          teamName={exTeam.teamName}
          desc={exTeam.desc}
          donate={exTeam.donate}
          volunteer={exTeam.volunteer}
        />
      </div>
      <div className="body-content">
        <ProgBar
          goal={exTeam.goal}
          prog={exTeam.progress}
          subs={exTeam.subgoals}
        />
        <div className="team-sections">
          {exTeam.sections.map((sect) => {
            return chooseComponent(sect);
          })}
        </div>
      </div>
    </div>
  );
}
