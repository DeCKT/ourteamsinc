import { useEffect } from "react";
import Carousel from "../components/Carousel";

function Home() {
  useEffect(() => {
    document.title = "Home | Our TEAMS Inc";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fullpage">
      <div id="carousel">
        <Carousel></Carousel>
      </div>
    </div>
  );
}

export default Home;
