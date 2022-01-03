import React from "react";
import Synonyms from "./Synonyms";
import Card from "react-bootstrap/Card";
import "./Styling/Meaning.css";
import Example from "./Example";

export default function Meaning(props) {
  let definitions = props.meaning.definitions;

  return (
    <div className="Meaning">
      <Card bg="light">
        <Card.Body>
          <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
          <br />
          <ol>
            {definitions.map(function (definition, index) {
              return (
                <div key={index}>
                  <li>{definition.definition}</li>
                  <em>
                    <br />
                    <Example example={definition.example} />
                  </em>
                  <Synonyms synonyms={definition.synonyms} />
                  <br />
                  <br />
                </div>
              );
            })}
          </ol>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}
