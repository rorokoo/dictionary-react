import Meaning from "./Meaning";
import "./Styling/Meanings.css";

export default function Meanings(props) {
  let meanings = props.meanings;

  return (
    <div className="meanings">
      {meanings.map(function (meaning, index) {
        return <Meaning key={index} meaning={meaning} />;
      })}
    </div>
  );
}
