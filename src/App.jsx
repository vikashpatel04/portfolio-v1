import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
