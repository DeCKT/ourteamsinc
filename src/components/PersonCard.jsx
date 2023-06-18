const PersonCard = (props) => {
  return (
    <div className="person-card">
      <img
        src={`src/assets/images/${props.img}`}
        alt={props.name}
        className="person-img"
      />
      <div className="info-container">
        <h4 className="card-name">{props.name}</h4>
        <a href={`mailto:${props.email}@ourteamsinc.org`}>
          <img
            className="email-icon"
            src="src/assets/envelope-svgrepo-com.svg"
          />
        </a>
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
