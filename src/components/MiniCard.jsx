// src/components/MiniCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function MiniCard({nombre, id,descripcion}) {

    if(descripcion === 'none'){
    return (
        <Link to={`/integrante/${id}`}>
            <div className="team-card">
                <p>{nombre}</p>
            </div>
        </Link>
    );
    }else{
        return (
            <div className="team-card">
                <p>{nombre}:{descripcion}</p>
            </div>
        );
    }
}

export default MiniCard;