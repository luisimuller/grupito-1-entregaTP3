// src/components/Home.jsx
import "../styles/index.css";
import "../styles/home.css";
import MemberCard from "./MemberCard";
import { INTEGRANTES } from "./Constantes";
import PROYECTOS from "../data/proyectos.json";
import ProyectosCarrusel from "./ProyectosCarrusel";
import Buscador from "./Buscador";

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>NextHire Devs</h1>
        <p className="subtitle"><strong>en desarrollo...</strong></p>
        <div className="loading-bar-container">
          <div className="loading-bar-fill"></div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="home-main">
        {/* Presentación */}
        <section id="presentacion" className="presentacion">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos estudiantes de la carrera de Desarrollo de Software y actualmente cursamos el segundo año de la
            tecnicatura. Esta página web ha sido desarrollada en el marco de la asignatura <strong>Desarrollo Web Frontend</strong>,
            con el propósito de aplicar los conocimientos adquiridos y documentar nuestras prácticas. A través de este proyecto
            buscamos consolidar competencias técnicas, fomentar el trabajo en equipo y sentar las bases para nuestra futura
            inserción en la industria tecnológica. Nuestro objetivo es formarnos de manera sólida en el ámbito del desarrollo
            de software, incorporando metodologías y buenas prácticas que nos permitan enfrentar los desafíos del mundo profesional.
          </p>
        </section>

        {/* Integrantes */}
        <section id="integrantes" className="integrantes">
          <h2>Integrantes</h2>
          <p>Accedé al perfil de cada integrante para conocer más sobre ellos</p>
          <div className="team-cards">
            {INTEGRANTES.map(member => (
              <MemberCard
                key={member.id}
                nombre={member.nombre}
                imagen={member.imagen}
                id={member.id}
              />
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="proyectos">
          <h2>Proyectos del Equipo</h2>
          <div className="proyectos-grid">
            {INTEGRANTES.map(member => {
              const proyectosDelMiembro = PROYECTOS.find(p => p.integranteId === member.id);
              return (
                <div key={member.id} className="proyecto-integrante">
                  <ProyectosCarrusel 
                    nombre={member.nombre}
                    proyectos={proyectosDelMiembro?.proyectos}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/*Buscador*/}
            <Buscador/>

        {/* Contacto */}
        <section id="contacto" className="contacto">
          <h2>Contacto</h2>
          <p>Puedes escribirnos a: <a href="mailto:contacto@nexthire.com">contacto@nexthire.com</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>© 2025 Equipo NextHire Devs - Proyecto académico</p>
      </footer>
    </div>
  );
}

export default Home;