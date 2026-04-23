import "./style.css"

function FINFORMATIVA() {
  return (
    <div className="info-container">

      <div className="info-hero">
        <img src="https://picsum.photos/seed/info/600/200" alt="hero" />
        <h1 className="info-hero-titulo">Picsum Photos</h1>
      </div>

      <div className="info-body">

        <section className="info-seccion">
          <h2>¿Qué es Picsum Photos?</h2>
          <p>
            Picsum Photos es una API gratuita que permite obtener imágenes
            de alta calidad de forma aleatoria o por ID. Es ideal para
            usar como placeholder en proyectos de desarrollo.
          </p>
        </section>

        <section className="info-seccion">
          <h2>Datos de la API</h2>
          <div className="info-cards">
            <div className="info-card">
              <span className="info-numero">500+</span>
              <span className="info-label">Fotos disponibles</span>
            </div>
            <div className="info-card">
              <span className="info-numero">100%</span>
              <span className="info-label">Gratuita</span>
            </div>
            <div className="info-card">
              <span className="info-numero">JPG</span>
              <span className="info-label">Formato</span>
            </div>
          </div>
        </section>

        <section className="info-seccion">
          <h2>Endpoints principales</h2>
          <div className="info-endpoint">
            <span className="info-metodo">GET</span>
            <code>/v2/list?limit=100</code>
            <p>Lista de fotos</p>
          </div>
          <div className="info-endpoint">
            <span className="info-metodo">GET</span>
            <code>/id/{"{id}"}/info</code>
            <p>Info de una foto</p>
          </div>
          <div className="info-endpoint">
            <span className="info-metodo">GET</span>
            <code>/id/{"{id}"}/{"{ancho}"}/{"{alto}"}</code>
            <p>Imagen con tamaño específico</p>
          </div>
        </section>

        <section className="info-seccion">
          <h2>Ejemplo de respuesta</h2>
          <div className="info-codigo">
            <pre>{`{
  "id": "10",
  "author": "Paul Jarvis",
  "width": 2500,
  "height": 1667,
  "url": "https://unsplash.com/...",
  "download_url": "https://picsum.photos/..."
}`}</pre>
          </div>
        </section>

      </div>
    </div>
  )
}

export default FINFORMATIVA