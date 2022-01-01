import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div>
      <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faVolumeUp} />
      </a>
    </div>
  );
}
