import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Results from "./Results";
import "./Styling/Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [error, setError] = useState(null);

  function handleDictionaryResponse(response) {
    setError(null);
    setResults(response);
  }

  function handleImgResponse(response) {
    setPhotos(response.data.photos);
  }

  function getResponse() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleDictionaryResponse)
      .catch(function (error) {
        setError(`"${keyword}" not found`);
        setResults(null);
        console.log(error);
      });

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

  return (
    <div>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Group controlId="formSearch">
          <Form.Control
            type="search"
            onChange={handleKeywordChange}
            placeholder="search for a word..."
          />
        </Form.Group>
      </Form>
      <b>{error}</b>
      <Results results={results} photos={photos} />
    </div>
  );
}
