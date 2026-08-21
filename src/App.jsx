import "./App.css";
import Navbar from "./Components/Navbar";
import ReHome from "./Components/ReHome";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function HomePage() {
  return (
    <>
      <ReHome />
      <About />
      <Project />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/#home" replace />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/project" element={<Navigate to="/#project" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
