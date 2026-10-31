import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  const [message, setMessage] = useState('')

  return (
    <main id="main-content" className="container flex-grow-1 py-5 d-flex align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
          <form
            className="card border-0 shadow-lg"
            onSubmit={(event) => {
              event.preventDefault()
              setMessage('El servicio de registro todavía no está conectado.')
            }}
          >
            <div className="card-body p-4 p-md-5 text-center">
              <p className="text-primary fw-semibold text-uppercase mb-2">ÚNETE A NÉBULA</p>
              <h1 className="h3">Crea tu cuenta</h1>
              <p className="text-body-secondary mb-4">Regístrate para conocer nuestros equipos.</p>
              <div className="mb-3">
                <label className="form-label" htmlFor="registerName">Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  id="registerName"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="registerEmail">Correo electrónico</label>
                <input
                  className="form-control"
                  type="email"
                  id="registerEmail"
                  autoComplete="email"
                  placeholder="nombre@correo.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="registerPassword">Contraseña</label>
                <input
                  className="form-control"
                  type="password"
                  id="registerPassword"
                  autoComplete="new-password"
                  placeholder="Mínimo 8 caracteres"
                  minLength={8}
                  required
                />
              </div>
              <button className="btn btn-primary w-100" type="submit">Crear cuenta</button>
              {message && <div className="alert alert-info mt-3 mb-0" role="status">{message}</div>}
              <p className="text-center text-body-secondary mb-0 mt-4">
                ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
