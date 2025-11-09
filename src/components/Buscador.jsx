import React, { useState } from 'react';
import proyectosData from '../data/proyectos.json';
import MiniCard from './MiniCard';

const Buscador = () => {
  const [tipoBusqueda, setTipoBusqueda] = useState('miembros');
  const [criterio, setCriterio] = useState('nombre');
  const [query, setQuery] = useState('');

  const handleTipoChange = (e) => {
    setTipoBusqueda(e.target.value);
    setCriterio('nombre');
  };

  const handleCriterioChange = (e) => {
    setCriterio(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const filtrar = () => {
    if (tipoBusqueda === 'miembros') {
      return proyectosData.filter((item) =>
        item.nombre.toLowerCase().includes(query.toLowerCase())
      );
    }

    return proyectosData
      .map((item) => {
        const proyectosFiltrados = item.proyectos.filter((proyecto) => {
          const campo =
            criterio === 'nombre' ? proyecto.titulo : proyecto.descripcion;
          return campo?.toLowerCase().includes(query.toLowerCase());
        });

        return proyectosFiltrados.length > 0
          ? { ...item, proyectos: proyectosFiltrados }
          : null;
      })
      .filter(Boolean);
  };

  const resultados = filtrar();

  return (
    <div>
      <h2>Buscador</h2>

      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleQueryChange}
      />

      <div>
        <label>
          <input
            type="radio"
            value="miembros"
            checked={tipoBusqueda === 'miembros'}
            onChange={handleTipoChange}
          />
          Miembros
        </label>
        <label>
          <input
            type="radio"
            value="proyectos"
            checked={tipoBusqueda === 'proyectos'}
            onChange={handleTipoChange}
          />
          Proyectos
        </label>
      </div>

      {tipoBusqueda === 'proyectos' && (
        <div>
          <label>
            <input
              type="radio"
              value="nombre"
              checked={criterio === 'nombre'}
              onChange={handleCriterioChange}
            />
            Título
          </label>
          <label>
            <input
              type="radio"
              value="descripcion"
              checked={criterio === 'descripcion'}
              onChange={handleCriterioChange}
            />
            Descripción
          </label>
        </div>
      )}

      <div>
        {resultados.map((item) => (
          <div key={item.id}>
            {tipoBusqueda === 'miembros' && <MiniCard
                key={item.id}
                nombre={item.nombre}
                id={item.id}
              />
            }
            {tipoBusqueda === 'proyectos' && (
                <ul>
                    {item.proyectos.map((proyecto) => (
                        <MiniCard
                            key={proyecto.id}
                            nombre={proyecto.titulo}
                            descripcion={proyecto.descripcion}
                            id={proyecto.id}
                        />
                    ))}
                </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buscador;