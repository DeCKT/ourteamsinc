import { useEffect, useState } from "react";

const ImgHalfLeft = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const resp = await import(
          `../assets/images/${props.img}` /* @vite-ignore */
        );
        setImage(resp.default);
      } catch (err) {
        console.error(err);
      }
    };
    fetchImg();
  }, [props.img]);

  return (
    <>
      <div className="content-section img-half">
        <img src={image} alt={props.alt} />
        <div className="content-half">{props.children}</div>
      </div>
    </>
  );
};

export default ImgHalfLeft;
