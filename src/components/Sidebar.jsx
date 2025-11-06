import React from "react";
import { Link } from "react-router-dom";
import { INTEGRANTES } from "./Constantes";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">NextHire Devs</h2>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/bitacora">Bitácora</Link></li>
          {INTEGRANTES.map(member => (
            <li key={member.id}>
              <Link to={`/integrante/${member.id}`}>{member.nombre}</Link>
            </li>
          ))}
          <li><Link to="/apionlypepes">API Only Pepes</Link></li>
          <li><Link to="/galeria">Galería</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
