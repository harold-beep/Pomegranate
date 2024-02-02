import Header from "./components/Header";
import Container from "./components/Container";
import Theme from "./components/Theme";
import "./styles.scss";

function App() {
  return (
    <Theme>
      <Header />
      <Container />
    </Theme>
  );
}

export default App;
