import check from "/assets/check-circle-svgrepo-com.svg";
import ongoing from "/assets/clock-svgrepo-com.svg";

export default function ProgBar(props) {
  return (
    <div className="progress-container">
      <div className="goal-container">
        <h5>${props.prog.toLocaleString("en", { useGrouping: true })}</h5>
        <div className="endgoal">
          ${props.goal.toLocaleString("en", { useGrouping: true })}
        </div>
      </div>
      <div className="bar-container">
        <progress id="progress-bar" value={props.prog} max={props.goal} />
      </div>
      <div className="subgoal-container">
        <ul>
          {props.subs.map((goal) => {
            return (
              <li key={props.subs.indexOf(goal)}>
                <img src={props.prog >= goal.amount ? check : ongoing} />$
                {goal.amount.toLocaleString("en", { useGrouping: true })} -{" "}
                {goal.purpose}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
