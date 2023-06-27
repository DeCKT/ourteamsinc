export default function Form(props) {
  const [activePage, setActivePage] = setState(1);

  return (
    <div className="form-container">
      <div className="form-title-container">
        <h3>{props.title}</h3>
        {props.pages.length > 1 ? (
          <div className="page-indicator">{}</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
