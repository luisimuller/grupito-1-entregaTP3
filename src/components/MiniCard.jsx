// src/components/MiniCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function MemberCard({nombre, id,descripcion}) {

  return (
    <Link to={`/integrante/${id}`}>
        <div className="team-card">
            <p>{nombre}:{descripcion}</p>
        </div>
    </Link>
  );
}

export default MemberCard;