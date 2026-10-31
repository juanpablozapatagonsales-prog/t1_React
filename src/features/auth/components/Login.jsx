import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  const [message, setMessage] = useState('')

  return (
    <main id="main-content" className="container flex-grow-1 py-5 d-flex align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
          <form
            className="card border-0 shadow-lg"
            onSubmit={(event) => {
              event.preventDefault()
              setMessage('El servicio de inicio de sesión todavía no está conectado.')
            }}
          >
            <div className="card-body p-4 p-md-5 text-center">
              <p className="text-primary fw-semibold text-uppercase mb-2">BIENVENIDO DE NUEVO</p>
              <h1 className="h3">Iniciar sesión</h1>
              <p className="text-body-secondary mb-4">Ingresa tus datos para continuar.</p>
              <div className="mb-3">
                <label className="form-label" htmlFor="loginEmail">Correo electrónico</label>
                <input
                  className="form-control"
                  type="email"
                  id="loginEmail"
                  autoComplete="username"
                  placeholder="nombre@correo.com"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="form-label" htmlFor="loginPassword">Contraseña</label>
                <input
                  className="form-control"
                  type="password"
                  id="loginPassword"
                  autoComplete="current-password"
                  placeholder="Tu contraseña"
                  required
                />
              </div>
              <div className="text-center mb-3">
                <Link to="/recuperar-contrasena">¿Olvidaste tu contraseña?</Link>
              </div>
              <button className="btn btn-primary w-100" type="submit">Iniciar sesión</button>
              {message && <div className="alert alert-info mt-3 mb-0" role="status">{message}</div>}
              <p className="text-center text-body-secondary mb-0 mt-4">
                ¿Aún no tienes cuenta? <Link to="/registro">Regístrate</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
