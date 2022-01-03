import React from "react";
import "./Styling/Results.css";
import Phonetics from "./Phonetics";

import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <Phonetics phonetics={props.results.data[0].phonetics} />
        <h2 className="word">{props.results.data[0].word}</h2>
        <h3 className="pronounce">/{props.results.data[0].phonetic}/</h3>
        <Meanings meanings={props.results.data[0].meanings} />
      </div>
    );
  } else {
    return null;
  }
}
