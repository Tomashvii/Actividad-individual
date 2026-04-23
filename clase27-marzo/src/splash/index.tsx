import "./style.css"

function FSPLASH() {
  return (
    <div className="splash-container">
      <img
        src="https://picsum.photos/seed/splash/300/300"
        alt="logo"
        className="splash-img"
      />
      <h1 className="splash-titulo">Picsum Gallery</h1>
      <p className="splash-sub">Explora fotos del mundo</p>
    </div>
  )
}

export default FSPLASH