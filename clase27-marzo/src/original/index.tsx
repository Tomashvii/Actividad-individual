import { useState, useEffect } from 'react'
import "./style.css"

interface Foto {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

function FORIGINAL() {
  const [fotos, setFotos] = useState<Foto[]>([])
  const [destacada, setDestacada] = useState<Foto | null>(null)

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=50")
      .then(res => res.json())
      .then(data => {
        setFotos(data)      
        setDestacada(data[0])
      })
  }, [])

  function elegirFoto(foto: Foto) {
    setDestacada(foto)
  }

  if (!destacada) return <p className="orig-cargando">Cargando...</p>

  return (
    <div className="orig-container">
      <h2 className="orig-titulo">Foto Destacada</h2>

      <div className="orig-destacada">
        <img
          src={`https://picsum.photos/id/${destacada.id}/600/400`}
          alt={destacada.author}
        />
        <p className="orig-autor">{destacada.author}</p>
        <p className="orig-dim">{destacada.width} x {destacada.height} px</p>
      </div>

      <h3 className="orig-subtitulo">Selecciona una foto</h3>

      <div className="orig-lista">
        {fotos.map((foto) => (
          <div
            key={foto.id}
            className={`orig-item ${destacada.id === foto.id ? "orig-item-activo" : ""}`}
            onClick={() => elegirFoto(foto)}
          >
            <img
              src={`https://picsum.photos/id/${foto.id}/100/100`}
              alt={foto.author}
            />
            <p>{foto.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FORIGINAL