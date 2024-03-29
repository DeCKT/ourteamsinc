import { useEffect, useState } from "react";

const ImgHalfLeft = (props) => {
  const [image, setImage] = useState("");

  return (
    <>
      <div className="content-section img-half">
        <div className="image-container">
          <img src={props.img} alt={props.alt} />
        </div>

        <div className="content-half">{props.children}</div>
      </div>
    </>
  );
};

export default ImgHalfLeft;
