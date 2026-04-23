import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import "./style.css"

interface Foto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

function FHOME() {
  const [fotos, setFotos] = useState<Foto[]>([])
  const [busqueda, setBusqueda] = useState("")
  const [filtro, setFiltro] = useState("todas")
  const [mensaje, setMensaje] = useState("")
  const navegar = useNavigate()

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=100")
      .then(res => res.json())
      .then(data => setFotos(data))
  }, [])

  function guardarFavorito(foto: Foto) {
    const guardados = localStorage.getItem("favoritos")
    const favoritos: Foto[] = guardados ? JSON.parse(guardados) : []
    const yaExiste = favoritos.find((f) => f.id === foto.id)
    if (yaExiste) {
      setMensaje("Ya está en favoritos")
    } else {
      favoritos.push(foto)
      localStorage.setItem("favoritos", JSON.stringify(favoritos))
      setMensaje("Guardado en favoritos")
    }
    setTimeout(() => setMensaje(""), 2000)
  }

  const fotosFiltradas = fotos.filter((foto) => {
    const coincideBusqueda = foto.author.toLowerCase().includes(busqueda.toLowerCase())
    if (filtro === "todas") return coincideBusqueda
    if (filtro === "horizontal") return coincideBusqueda && foto.width > foto.height
    if (filtro === "vertical") return coincideBusqueda && foto.height > foto.width
    return coincideBusqueda
  })

  return (
    <div className="home-container">
      <h2 className="home-titulo">Galería de Fotos</h2>

      {mensaje && <p className="home-mensaje">{mensaje}</p>}

      <input
        className="home-buscador"
        type="text"
        placeholder="Buscar por autor..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="home-filtros">
        <button onClick={() => setFiltro("todas")} className={filtro === "todas" ? "filtro-activo" : ""}>Todas</button>
        <button onClick={() => setFiltro("horizontal")} className={filtro === "horizontal" ? "filtro-activo" : ""}>Horizontal</button>
        <button onClick={() => setFiltro("vertical")} className={filtro === "vertical" ? "filtro-activo" : ""}>Vertical</button>
      </div>

      <div className="home-grid">
        {fotosFiltradas.map((foto) => (
          <div key={foto.id} className="home-card">
            <img
              src={`https://picsum.photos/id/${foto.id}/300/200`}
              alt={foto.author}
              onClick={() => navegar(`/usuario?id=${foto.id}&autor=${foto.author}&ancho=${foto.width}&alto=${foto.height}`)}
            />
            <p>{foto.author}</p>
            <button
              className="home-fav-btn"
              onClick={() => guardarFavorito(foto)}
            >
              Guardar en favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FHOME