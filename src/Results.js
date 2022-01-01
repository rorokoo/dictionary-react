import React from "react";
import Phonetics from "./Phonetics";

import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results)
    return (
      <div>
        <Phonetics phonetics={props.results.data[0].phonetics} />
        <h2>{props.results.data[0].word}</h2>
        <Meanings meanings={props.results.data[0].meanings} />
      </div>
    );
  else {
    return null;
  }
}
