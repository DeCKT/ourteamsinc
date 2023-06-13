const ImgHalfLeft = (props) => {
  return (
    <>
      <div className="content-section img-half">
        <img src={`src/assets/images/${props.url}`} alt={props.alt} />
        <div className="content-half">{props.children}</div>
      </div>
    </>
  );
};

export default ImgHalfLeft;
