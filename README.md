# NextHire - Devs

## IFTS29 - Front End - TP1  
### Equipo:
**Grupo 1**
---
### Integrantes

- **Burgos Hernán Andrés** — *(Erwin Schrödinger)*  
- **Chiovetta Nicolás** — *(Jack Smith)*  
- **Donnet Leonel** — *(Gregory Karta)*  
- **Leroy Delgado Adrián Agustín** — *(Carlos HardDrive)*  
- **Müller Luisina** — *(Lola Sparrow)*  

---

## Título del Proyecto

**NextHire - Devs**  
Una plataforma para descubrir desarrolladores con estilo, creatividad y habilidades únicas (?).

---

## 📝 Descripción

**NextHire - Devs** es un proyecto desarrollado como parte del **Trabajo Práctico 3 de la materia Front End** del **IFTS N°29**.  
El objetivo fue crear una aplicación web dinámica donde cada integrante del equipo cuenta con su propio perfil interactivo, utilizando React para la creación de componentes con una metodología de reutilización.  

Cada perfil presenta:
- Información personal y profesional del desarrollador.
- Habilidades técnicas y blandas.
- Películas y discos favoritos.
- Enlaces de contacto y redes.

Además, el sitio se integra con una **API de Only Pepes** para agregar un toque divertido y visual, demostrando el uso de **fetch** y manejo de datos externos en React.

---

## 🆕 Novedades TP3 - Actualizaciones respecto a la versión anterior

Esta versión representa una **evolución significativa** del proyecto original ([TP2 - grupito-uno-front](https://github.com/luisimuller/grupito-uno-front)). A continuación se detallan las mejoras y nuevas funcionalidades implementadas:

### ✨ Nuevas Funcionalidades

#### 1. **Galería de Imágenes Interactiva**
- 📸 Nueva sección de galería con visor de imágenes (lightbox)
- 🔍 Visualización ampliada de imágenes con navegación
- 🎨 Integración de la librería `yet-another-react-lightbox`
- 🖼️ Wallpapers temáticos del equipo

#### 2. **Carrusel de Proyectos**
- 🎪 Componente `ProyectosCarrusel.jsx` con tecnología Swiper
- 📱 Navegación táctil y responsive
- 🔗 Enlaces directos a proyectos reales de cada integrante
- 🎮 Proyectos personalizados (ej: Halo, FIFA, Warships para Carlos HardDrive)

#### 3. **Buscador Dinámico**
- 🔎 Componente `Buscador.jsx` para filtrado en tiempo real
- ⚡ Búsqueda instantánea de integrantes
- 🎯 Mini-cards con resultados visuales
- 📋 Integración con datos JSON

#### 4. **Footer con Redes Sociales Animadas**
- 🌟 Iconos de redes sociales con efectos hover avanzados
- 🔄 Animaciones de escalado, rotación y cambio de color
- 💫 Efectos visuales: GitHub, LinkedIn, Twitter, Instagram
- 🎨 Diseño coherente con la paleta de colores del sitio

#### 5. **Mejoras en la API OnlyPepes**
- 🔧 Configuración de proxy en Vite para evitar problemas CORS
- ⚙️ Manejo mejorado de estados de carga y errores
- 🎯 Interfaz más pulida y responsive

### 🔄 Cambios en la Estructura

#### Nuevos Componentes
```
src/components/
├── Buscador.jsx          ⭐ NUEVO
├── Galeria.jsx           ⭐ NUEVO
├── MiniCard.jsx          ⭐ NUEVO
├── ProyectosCarrusel.jsx ⭐ NUEVO
├── ProyectosPage.jsx     ⭐ NUEVO
└── Carrusel.jsx          ⭐ NUEVO
```

#### Nuevos Estilos
```
src/styles/
├── footer.css            ⭐ NUEVO
├── carrusel.css          ⭐ NUEVO
└── galeria.css           ⭐ NUEVO
```

#### Nuevos Datos
```
src/data/
└── proyectos.json        ⭐ NUEVO
```

### 📦 Nuevas Dependencias

```json
{
  "framer-motion": "^12.23.24",           ⭐ NUEVO - Animaciones fluidas
  "swiper": "^12.0.3",                    ⭐ NUEVO - Carruseles touch
  "yet-another-react-lightbox": "^3.25.0" ⭐ NUEVO - Galería de imágenes
}
```

### 🎨 Mejoras de UX/UI

1. **Navegación Mejorada**
   - Sidebar actualizado con nuevas secciones (Galería, Proyectos)
   - Enlaces más intuitivos y accesibles

2. **Diseño Visual**
   - Footer con color turquesa coherente con el tema
   - Iconos SVG integrados (sin dependencias externas de iconos)
   - Animaciones suaves con cubic-bezier personalizado

3. **Responsive Design**
   - Mejoras en la adaptación móvil del carrusel
   - Galería optimizada para diferentes tamaños de pantalla
   - Buscador adaptativo

### ⚙️ Mejoras Técnicas

1. **Configuración de Vite**
   - Proxy configurado para APIs externas
   - Mejor manejo de rutas y assets

2. **Gestión de Datos**
   - Migración a JSON para proyectos
   - Estructura de datos más escalable
   - Separación de concerns

3. **Componentes Reutilizables**
   - `MiniCard` para resultados de búsqueda
   - Componentes modulares y mantenibles

### 📊 Comparativa Rápida

| Característica | TP2 (Anterior) | TP3 (Actual) |
|----------------|----------------|--------------|
| Galería de Imágenes | ❌ | ✅ |
| Carrusel de Proyectos | ❌ | ✅ |
| Buscador | ❌ | ✅ |
| Footer con Redes Sociales | ⚪ Básico | ✅ Animado |
| Proxy API | ❌ | ✅ |
| Datos de Proyectos | ❌ | ✅ JSON |
| Componentes | 11 | 17 (+6) |
| Dependencias | 3 | 6 (+3) |

---

## Tecnologías Utilizadas

- **Vite** — Entorno de desarrollo rápido para React.  
- **React.js** — Librería principal para la construcción de componentes.  
- **React Router DOM** — Navegación entre vistas y perfiles.  
- **CSS Modules / Stylesheets** — Estilos personalizados por integrante.  
- **JavaScript (ES6+)** — Lógica y manejo de datos.  
- **Only Pepes API** — Fuente de datos para componentes dinámicos.  

---

## Estructura de Archivos

NextHire-Devs/\
│\
├── public/\
│\
└── src/\
├── assets/\
│ └── img/ # Imágenes del proyecto\
│\
├── components/ # Componentes principales del sitio\
│ ├── ApiOnlyPepes.jsx\
│ ├── Bitacora.jsx\
│ ├── Footer.jsx\
│ ├── Header.jsx\
│ ├── Home.jsx\
│ ├── Integrante.jsx\
│ ├── IntegranteContent.jsx\
│ ├── IntegranteFooter.jsx\
│ ├── IntegranteHeader.jsx\
│ ├── IntegranteNav.jsx\
│ ├── MemberCard.jsx\
│ ├── Sidebar.jsx\
│ └── Timeline.jsx\
│\
├── data/\
│ ├── integrantes.json # Datos de los integrantes (perfiles)\
│ └── integrantesData.js # Estructura JS para consumo alternativo\
│\
├── styles/ # Hojas de estilo individuales\
│ ├── apionlypepes.css\
│ ├── bitacora.css\
│ ├── carlosharddrive.css\
│ ├── erwinschrodinger.css\
│ ├── gregorykarta.css\
│ ├── jacksmith.css\
│ ├── lolasparrow.css\
│ ├── home.css\
│ ├── index.css\
│ └── timeline.css\
│\
├── App.jsx\
├── App.css\
├── main.jsx\
└── routes.jsx\


