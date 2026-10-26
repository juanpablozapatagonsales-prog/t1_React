import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold" to="/" onClick={closeMenu}>
            <span className="badge rounded-3 text-bg-primary fs-5" aria-hidden="true">N</span>
            <span>Nébula <span className="d-block small text-white-50">GAMING SYSTEMS</span></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="mainNavbar"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon" aria-hidden="true" />
          </button>
          <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="mainNavbar">
            <ul className="navbar-nav text-center ms-md-auto me-md-4 mb-3 mb-md-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end onClick={closeMenu}>Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/props" onClick={closeMenu}>Props</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#equipos" onClick={closeMenu}>Equipos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#marcas" onClick={closeMenu}>Marcas</a>
              </li>
            </ul>
            <div className="d-grid d-sm-flex justify-content-center gap-2">
              <Link className="btn btn-outline-light" to="/login" onClick={closeMenu}>Iniciar sesión</Link>
              <Link className="btn btn-primary" to="/registro" onClick={closeMenu}>Crear cuenta</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
