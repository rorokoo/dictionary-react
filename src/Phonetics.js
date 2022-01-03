import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import "./Styling/Phonetics.css";

export default function Phonetics(props) {
  function play(event) {
    event.preventDefault();
    let audio = new Audio(props.phonetics[0].audio);
    audio.play();
  }

  return (
    <button className="soundButton" onClick={play}>
      <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
    </button>
  );
}
