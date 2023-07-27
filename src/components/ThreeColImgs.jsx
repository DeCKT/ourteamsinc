import { useEffect, useState } from "react";

function ThreeColImgs(props) {
  const [images, setImages] = useState([]);

  const array = [];

  useEffect(() => {
    const fetchImg = async (imgSrc) => {
      try {
        const resp = await import(
          `../assets/images/${imgSrc}` /* @vite-ignore */
        );
        array.push(resp.default);
      } catch (err) {
        console.error(err);
      }
    };
    props.images.forEach(fetchImg(img));
    setImages(array);
  }, [props.images]);
  return (
    <div className="three-col-container">
      {images.map((img) => {
        return (
          <img
            key={props.imgs.indexOf(img)}
            className="img-third"
            src={img.src}
          />
        );
      })}
    </div>
  );
}

export default ThreeColImgs;
