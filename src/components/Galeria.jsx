// src/components/Galeria.jsx
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "../styles/galeria.css";

const images = [
  { src: "https://picsum.photos/id/1015/800/600" },
  { src: "https://picsum.photos/id/1016/800/600" },
  { src: "https://picsum.photos/id/1025/800/600" },
  { src: "https://picsum.photos/id/1035/800/600" },
  { src: "https://picsum.photos/id/1045/800/600" },
];

function Galeria() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="galeria-page">
      <h1>Galería Interactiva</h1>
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
