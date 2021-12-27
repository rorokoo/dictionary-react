import React from "react";

import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results)
    return (
      <div>
        <h2>{props.results.data[0].word}</h2>
        <Meanings meanings={props.results.data[0].meanings} />
      </div>
    );
  else {
    return null;
  }
}
