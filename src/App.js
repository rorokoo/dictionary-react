import "./App.css";
import Container from "react-bootstrap/Container";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Container>
        <header> dictionary app</header>
        <Dictionary />
      </Container>
    </div>
  );
}
export default App;
