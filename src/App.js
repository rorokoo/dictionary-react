import "./Styling/App.css";
import Container from "react-bootstrap/Container";
import Dictionary from "./Dictionary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Container>
        <header>
          {" "}
          Dictionary
          <span className="icon">
            <FontAwesomeIcon icon={faBook} />
          </span>
        </header>
        <Dictionary />
        <a
          href="https://github.com/Rorokoo/dictionary-react"
          className="gitLink"
        >
          link to project
        </a>
      </Container>
    </div>
  );
}
export default App;
