import "./App.css";
import Container from "react-bootstrap/Container";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Container>
        <header> dictionary app</header>
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
