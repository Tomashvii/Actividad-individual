import { useSearchParams } from 'react-router'
import "./style.css"

function FUSUARIO() {
  const [params] = useSearchParams()
  const id = params.get("id")
  const autor = params.get("autor")
  const ancho = params.get("ancho")
  const alto = params.get("alto")

  if (!id) {
    return (
      <div className="usu-container">
        <h2 className="usu-titulo">Perfil</h2>

        <div className="usu-perfil">
          <img
            src="https://picsum.photos/seed/usuario/100/100"
            alt="avatar"
            className="usu-avatar"
          />
          <h3>Explorador Picsum</h3>
          <p>Amante de la fotografía</p>
        </div>

        <div className="usu-sanagustin">
          <h3 className="usu-san-titulo">San Agustín</h3>
          <img
            src="https://picsum.photos/seed/sanagustin/400/200"
            alt="San Agustín"
            className="usu-san-img"
          />
          <p className="usu-san-nombre">Parque Arqueológico de San Agustín</p>
          <p className="usu-san-desc">
            Patrimonio de la Humanidad por la UNESCO desde 1995. Sus esculturas
            precolombinas representan figuras míticas de culturas ancestrales
            en el departamento del Huila, Colombia.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="usu-container">
      <h2 className="usu-titulo">Detalle de Foto</h2>

      <div className="usu-detalle">
        <img
          src={`https://picsum.photos/id/${id}/400/300`}
          alt={autor ?? undefined}
          className="usu-detalle-img"
        />
        <div className="usu-detalle-info">
          <p><strong>Autor:</strong> {autor}</p>
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Dimensiones:</strong> {ancho} x {alto} px</p>
        </div>
        ```
                <div className="usu-detalle-variantes">
                  <p className="usu-variantes-titulo">Tamaños disponibles</p>
                  <div className="usu-variantes-grid">
                    {[200, 400, 600].map((tam) => (
                      <div key={tam} className="usu-variante">
                        <img
                          src={`https://picsum.photos/id/${id}/${tam}/${tam}`}
                          alt={`${tam}px`}
                        />
                        <span>{tam}px</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <a
                  href={`https://picsum.photos/id/${id}/original`}
                  target="_blank"
                  rel="noreferrer"
                  className="usu-descargar"
                >
                  Descargar foto
                </a>
      </div>
    </div>
  )
}

export default FUSUARIO