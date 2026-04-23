import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'
import FSPLASH from './splash'
import FHOME from './home'
import FFAVORITOS from './favoritos'
import FINFORMATIVA from './informativa'
import FUSUARIO from './usuario'
import FORIGINAL from './original'
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/original">Original</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/usuario">Usuario</Link>
        </nav>
        <Routes>
          <Route path="/splash" element={<FSPLASH />} />
          <Route path="/" element={<FHOME />} />
          <Route path="/favoritos" element={<FFAVORITOS />} />
          <Route path="/original" element={<FORIGINAL />} />
          <Route path="/informativa" element={<FINFORMATIVA />} />
          <Route path="/usuario" element={<FUSUARIO />} />
        </Routes>
      </Router>
    </>
  )
}

export default App