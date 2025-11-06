// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Bitacora from "./components/Bitacora";
import Integrante from "./components/Integrante";
import ApiOnlyPepes from "./components/ApiOnlyPepes";
import Galeria from "./components/Galeria";
import Carrusel from "./components/Carrusel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/integrante/:id" element={<Integrante />} />
            <Route path="/apionlypepes" element={<ApiOnlyPepes />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/carrusel" element={<Carrusel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;