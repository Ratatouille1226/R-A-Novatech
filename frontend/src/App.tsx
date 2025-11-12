import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Main, Comet } from "./components";
import { Staff } from "./pages";

function App() {
  return (
    <main className="container">
      <Header />
      <Comet />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </main>
  );
}

export default App;
