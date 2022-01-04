import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Results from "./Results";
import "./Styling/Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunset");
  let [results, setResults] = useState(null);
  let [ready, setReady] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response);
    setReady(true);
  }

  function handleImgResponse(response) {
    setPhotos(response.data.photos);
  }

  function getResponse() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    const apiKey = "563492ad6f91700001000001cfc9acc2bae94115b9f0e329fa118105";
    const apiPicsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${apiKey}` };
    axios.get(apiPicsUrl, { headers: headers }).then(handleImgResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getResponse();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (ready) {
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

        <Results results={results} photos={photos} />
      </div>
    );
  } else {
    getResponse();
    return (
      <div>
        <em className="instruction"> search for a word...</em>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formSearch">
            <Form.Control type="search" onChange={handleKeywordChange} />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
