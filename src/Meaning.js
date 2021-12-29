import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  let definitions = props.meaning.definitions;
  console.log(definitions);

  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <em>
              <b>example: </b>
              {definition.example}
            </em>
            <Synonyms synonyms={definition.synonyms} />
            <p>............</p>
          </div>
        );
      })}
      <br />
    </div>
  );
}
