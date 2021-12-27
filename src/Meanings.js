import Meaning from "./Meaning";

export default function Meanings(props) {
  let meanings = props.meanings;

  return meanings.map(function (meaning, index) {
    return <Meaning key={index} meaning={meaning} />;
  });
}
