import React from "react";
import "./Styling/Results.css";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results) {
    console.log(props.results.data[0].word);
    return (
      <div className="Results">
        <Phonetics phonetics={props.results.data[0].phonetics} />
        <h2 className="word">{props.results.data[0].word}</h2>
        <h3 className="pronounce">/{props.results.data[0].phonetic}/</h3>
        <Meanings meanings={props.results.data[0].meanings} />
        <Photos photos={props.photos}></Photos>
        <div className="gitLink">
          <a
            href="https://github.com/Rorokoo/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>
          &nbsp;by Roni Siles
        </div>
      </div>
    );
  } else {
    return null;
  }
}
