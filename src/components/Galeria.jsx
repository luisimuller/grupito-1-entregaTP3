// src/components/Galeria.jsx
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "../styles/galeria.css";
import wall1 from "../assets/img/wall1.avif";
import wall2 from "../assets/img/wall2.avif";
import wall3 from "../assets/img/wall3.jpg";
import wall4 from "../assets/img/wall4.jpg";
import wall5 from "../assets/img/wall5.jpg";
import wall6 from "../assets/img/wall6.jpg";

const images = [
  { src: wall1 },
  { src: wall2 },
  { src: wall3 },
  { src: wall4 },
  { src: wall5 },
  { src: wall6 }
];

function Galeria() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="galeria-page">
      <h1>WallPepes</h1>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`imagen ${i}`}
            className="gallery-item"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3 }}
      />
    </div>
  );
}

export default Galeria;
