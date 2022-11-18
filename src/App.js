import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <div>
        <Header className="headerComponet" />
      </div>
      <div className="pages">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
