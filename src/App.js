import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Logout from "./screens/Logout";
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
