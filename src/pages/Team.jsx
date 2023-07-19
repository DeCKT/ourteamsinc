import { useParams } from "react-router-dom";

import bgImg from "../assets/images/darin-and-children.jpg";
import { useEffect } from "react";
import Button from "../components/Button";

// example team data
const exTeam = {
  teamId: "1",
  teamName: "New Life International",
  desc: "We are aiming to raise $35,000 to help complete construction of the New life International Orphanage secondary school.",
  bgImg: bgImg,
  donate: "donate-url",
  volunteer: "volunteer-url",
  goal: 35000,
  progress: 29402,
  subgoals: [
    { amount: 15000, purpose: "Finish Walls and Roof" },
    { amount: 20000, purpose: "Pave Surrounding Area" },
  ],
  sections: [
    {
      header: "About",
      content: [
        "New Life International Orphanage is a charitable organization focused on providing orphans with enhanced educational opportunities. Their mission centers around building a physical school that offers quality education to empower these children and enable them to break the cycle of poverty. Through this initiative, New Life International Orphanage aims to create a brighter future for orphaned children by providing them with a dedicated educational facility.",
      ],
      images: ["cleanup-project.jpg"],
      style: "ImgHalfLeft",
    },
    {
      header: null,
      content: [
        "New Life International Orphanage is a charitable organization focused on providing orphans with enhanced educational opportunities. Their mission centers around building a physical school that offers quality education to empower these children and enable them to break the cycle of poverty. Through this initiative, New Life International Orphanage aims to create a brighter future for orphaned children by providing them with a dedicated educational facility.",
      ],
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
        "|[Complete construction]",
        "[Clean and secure surrounding area]",
        "[Educate and edify teachers]|",
      ],
      images: ["cleanup-project.jpg"],
      style: "LargeImgSection",
    },
  ],
};

export default function Team() {
  useEffect(() => {
    document.title = `${exTeam.teamName} | Our TEAMS`;
    window.scrollTo(0, 0);
  });

  return (
    <div className="team-page">
      <div className="intro-container">
        <div
          className="fullpage"
          style={{ backgroundImage: `url(${exTeam.bgImg})` }}
        ></div>
        <div className="team-intro">
          <h1>{exTeam.teamName}</h1>
          <p>{exTeam.desc}</p>
          {exTeam.donate || exTeam.volunteer ? (
            <div className="intro-btn-container">
              {exTeam.donate ? <Button>Donate</Button> : null}
              {exTeam.donate ? <Button outlined>Volunteer</Button> : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
