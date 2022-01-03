import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Results from "./Results";
import "./Styling/Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunset");
  let [results, setResults] = useState(null);
  let [ready, setReady] = useState(false);

  function handleResponse(response) {
    setResults(response);
    setReady(true);
  }

  function getResponse() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getResponse();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (ready) {
    console.log(true);
    return (
      <div>
        <em className="instruction"> search for a word...</em>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formSearch">
            <Form.Control
              type="search"
              onChange={handleKeywordChange}
              defaultValue="sunset"
            />
          </Form.Group>
        </Form>

        <Results results={results} />
      </div>
    );
  } else {
    console.log(false);
    getResponse();
    return "Loading...";
  }
}
