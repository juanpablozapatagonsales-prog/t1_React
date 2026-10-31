import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky-top">
      <nav
        className="navbar navbar-expand-lg bg-black border-bottom border-secondary"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center text-info"
            to="/"
            onClick={closeMenu}
            aria-label="Inicio"
            title="Inicio"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5v7A1.5 1.5 0 0 0 2.5 12h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 2zm0 1h11a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5" />
              <path d="M.5 13a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z" />
            </svg>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="mainNavbar"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon" aria-hidden="true" />
          </button>

          <div
            className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}
            id="mainNavbar"
          >
            <ul className="navbar-nav me-lg-4 mb-3 mb-lg-0 fst-italic ">
              <li className="nav-item ">
                <NavLink
                  className="nav-link justify-content-start"
                  to="/api"
                  onClick={closeMenu}
                >
                  API
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={closeMenu}>
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/props" onClick={closeMenu}>
                  Props
                </NavLink>
              </li>
            </ul>

            <div className="d-grid d-sm-flex justify-content-center gap-2 ms-lg-auto fst-italic">
              <Link
                className="btn btn-outline-light"
                to="/login"
                onClick={closeMenu}
              >
                Iniciar sesión
              </Link>
              <Link
                className="btn btn-outline-light"
                to="/registro"
                onClick={closeMenu}
              >
                Crear cuenta
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
// fuente de letras en cursiva : fst-italic
