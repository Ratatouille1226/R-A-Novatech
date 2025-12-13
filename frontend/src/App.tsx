import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Comet, Footer } from "./components";
import { NotFound, Staff, Main } from "./pages";

function App() {
  return (
    <main className="container">
      <Header />
      <Comet />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
