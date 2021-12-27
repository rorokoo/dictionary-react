import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} defintion`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-1" controlId="formSearch">
          <Form.Control type="search" onChange={handleKeywordChange} />
        </Form.Group>
      </Form>
    </div>
  );
}
