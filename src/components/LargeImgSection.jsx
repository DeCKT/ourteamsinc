function LargeImgSection(props) {
  return (
    <div className="large-img-container">
      <img src={`src/assets/images/${props.img}`} className={props.type} />
      <section className="white-background">{props.children}</section>
    </div>
  );
}
export default LargeImgSection;
