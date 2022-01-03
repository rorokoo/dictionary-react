import React from "react";
import "./Styling/Synonyms.css";

export default function Synonyms(props) {
  let synonyms = props.synonyms;

  if (synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        <br />
        <b>Synonyms: {"  "}</b>
        {synonyms.map(function (synonym, index) {
          if (index < synonyms.length - 1) {
            return (
              <li className="synonym" key={index}>
                {synonym},
              </li>
            );
          } else {
            return (
              <li className="synonym" key={index}>
                {synonym}
              </li>
            );
          }
        })}
      </ul>
    );
  } else {
    return null;
  }
}
