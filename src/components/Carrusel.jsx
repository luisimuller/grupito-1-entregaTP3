import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/carrusel.css";

function Carrusel({ nombre, proyectos }) {
  if (!proyectos || proyectos.length === 0) return null;

  return (
    <div className="carrusel-page">
      <h2 className="carrusel-titulo">Proyectos realizados por {nombre}</h2>
      <div className="carrusel-container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={proyectos.length > 1}
          className="carrusel-swiper"
        >
          {proyectos.map((proyecto, index) => (
            <SwiperSlide key={index}>
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="carrusel-img"
              />
              <div className="carrusel-info">
                <a
                  href={proyecto.repo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proyecto-link"
                >
                  <h3>{proyecto.titulo}</h3>
                </a>
                <p>{proyecto.descripcion}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carrusel;
