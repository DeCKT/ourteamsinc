import { useEffect, useState } from "react";

function LargeImgSection(props) {
  const [image, setImage] = useState("");

  let imageType = "large-img-right";
  let sectionType = "large-img-section-left";

  if (props.type === "left") {
    imageType = "large-img-left";
    sectionType = "large-img-section-right";
  }

  return (
    <div className="large-img-container">
      <img src={props.img} className={imageType} />
      <section className={`white-background ${sectionType}`}>
        {props.children}
      </section>
    </div>
  );
}
export default LargeImgSection;
