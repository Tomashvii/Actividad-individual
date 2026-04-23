import { useState, useEffect } from 'react'
import "./style.css"

interface Foto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

function FfAVORITOS() {
  const [favoritos, setFavoritos] = useState<Foto[]>([])

  useEffect(() => {
    const guardados = localStorage.getItem("favoritos")
    if (guardados) {
      setFavoritos(JSON.parse(guardados))
    }
  }, [])

  function eliminar(id: string) {
    const nuevos = favoritos.filter((f) => f.id !== id)
    setFavoritos(nuevos)
    localStorage.setItem("favoritos", JSON.stringify(nuevos))
  }

  return (
    <div className="favs-container">
      <h2 className="favs-titulo">Mis Favoritos</h2>

      {favoritos.length === 0 ? (
        <p className="favs-vacio">No tienes favoritos aún. Agrega desde Home.</p>
      ) : (
        <div className="favs-grid">
          {favoritos.map((foto) => (
            <div key={foto.id} className="favs-card">
              <img src={`https://picsum.photos/id/${foto.id}/300/200`} alt={foto.author} />
              <p>{foto.author}</p>
              <button onClick={() => eliminar(foto.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FfAVORITOS