function ThreeColImgs(props) {
  return (
    <div className="three-col-container">
      {props.imgs.map((img) => {
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
