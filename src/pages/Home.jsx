import { useEffect } from "react";
import Carousel from "../components/Carousel";
import quote from "/assets/platoquote.svg";
import map from "/assets/worldmap.svg";
import Pin from "../components/Pin";

const pins = [
  {
    pinLeft: "70",
    pinTop: "50",
    teamId: "1",
    active: "true",
    teamName: "New Life",
    teamPic: "darin-and-children.jpg",
  },
];

function Home() {
  useEffect(() => {
    document.title = "Home | Our TEAMS Inc";
    window.scrollTo(0, 0);
  }, []);

  const clickEvtHandle = (e) => {
    console.log(e.nativeEvent);
  };

  return (
    <div className="fullpage">
      <div id="carousel">
        <Carousel></Carousel>
      </div>
      <div className="body-content">
        <div className="map-container">
          <img src={map} alt="" />
          <div className="pin-container" onClick={clickEvtHandle}>
            {pins.map((pin) => {
              return <Pin key={pin.teamId} pin={pin}></Pin>;
            })}
          </div>
        </div>
        <img src={quote} alt="" />
      </div>
    </div>
  );
}

export default Home;
