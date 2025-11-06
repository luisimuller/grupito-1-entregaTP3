import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/home.css";

function ProyectosCarrusel({ nombre, proyectos }) {
    if (!proyectos || proyectos.length === 0) return null;

    const images = import.meta.glob("../assets/img/*.{jpeg,jpg,png,svg}", {
        eager: true,
        import: "default",
    });

    const getImageSrc = (imagen) => {
        if (imagen.startsWith("http")) {
            return imagen;
        }

        const filename = imagen.split("/").pop();
        const imagePath = `../assets/img/${filename}`;
        const foundImage = images[imagePath];

        if (foundImage) {
            return foundImage;
        } else {
            console.warn(`Imagen no encontrada: ${filename}`);
            console.log("Imágenes disponibles:", Object.keys(images));
            return "https://picsum.photos/800/400";
        }
    };

    return (
        <div className="proyectos-carrusel-container">
            <h3 className="carrusel-integrante">{nombre}</h3>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                loop={proyectos.length > 1}
                className="carrusel-swiper"
            >
                {proyectos.map((proyecto) => (
                    <SwiperSlide key={proyecto.id}>
                        <div className="carrusel-slide-content">
                            <img
                                src={getImageSrc(proyecto.imagen)}
                                alt={proyecto.titulo}
                                className="carrusel-img"
                                onError={(e) => {
                                    console.error("Error cargando imagen:", proyecto.imagen);
                                    e.target.src = "https://picsum.photos/800/400";
                                }}
                            />
                            <div className="carrusel-info">
                                <h4>
                                    <a href={proyecto.repo || "#"} target="_blank" rel="noopener noreferrer">
                                        {proyecto.titulo}
                                    </a>
                                </h4>
                                <p>{proyecto.descripcion}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProyectosCarrusel;
