import Carrusel from "../components/Carrusel";
import proyectosData from "../data/proyectos.json"; 

function ProyectosPage() {
  return (
    <div className="proyectos-page">
      {proyectosData.map((integrante, idx) => (
        <Carrusel
          key={idx}
          nombre={integrante.nombre} 
          proyectos={integrante.proyectos}
        />
      ))}
    </div>
  );
}

export default ProyectosPage;
