import "./App.css";
import { Header, Main } from "./components";
import { Comet } from "./components/comet/Comet";

function App() {
  return (
    <main className="container">
      <Header />
      <Main />
      <Comet />
    </main>
  );
}

export default App;
