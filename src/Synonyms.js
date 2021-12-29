import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <ul>
        <br />
        <b>Synonyms: {"  "}</b>
        {props.synonyms.map(function (synonym, index) {
          return (
            <li className="synonym" key={index}>
              {synonym},
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
