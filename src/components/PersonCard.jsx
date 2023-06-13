const PersonCard = (props) => {
  console.log(props);
  return (
    <div className="person-card">
      <img src={`src/assets/images/${props.img}`} alt={props.name} />
      <div className="info-container">
        <h3 className="card-name">{props.name}</h3>
        <a href={`mailto:${props.email}`}></a>
      </div>

      <ul className="duties">
        {props.duties.map((duty) => {
          return <li key={duty}>{duty}</li>;
        })}
      </ul>
    </div>
  );
};

export default PersonCard;
