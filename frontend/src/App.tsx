import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Comet, Footer } from "./components";
import { NotFound, Staff, Main, Works } from "./pages";
import AOS from "aos";
import { useEffect } from "react";
import { WorkMakeUp } from "./pages/works/components";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",

      offset: 120, // элемент появляется чуть раньше
      delay: 0, // базовая задержка
      anchorPlacement: "top-bottom",

      mirror: false,
    });
  }, []);

  return (
    <main className="container">
      <Header />
      <Comet />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/works" element={<Works />} />
        <Route path="/makeup" element={<WorkMakeUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
