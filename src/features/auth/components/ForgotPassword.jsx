import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ForgotPassword = () => {
  const [message, setMessage] = useState('')

  return (
    <main className="container flex-grow-1 py-5 d-flex align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
          <form
            className="card border-0 shadow-lg"
            onSubmit={(event) => {
              event.preventDefault()
              setMessage('El servicio para recuperar contraseñas todavía no está conectado.')
            }}
          >
            <div className="card-body p-4 p-md-5 text-center">
              <p className="text-primary fw-semibold text-uppercase mb-2">RECUPERA EL ACCESO</p>
              <h1 className="h3">¿Olvidaste tu contraseña?</h1>
              <p className="text-body-secondary mb-4">
                Escribe el correo asociado a tu cuenta para solicitar instrucciones de recuperación.
              </p>
              <div className="mb-3">
                <label className="form-label" htmlFor="recoveryEmail">Correo electrónico</label>
                <input
                  className="form-control"
                  type="email"
                  id="recoveryEmail"
                  autoComplete="email"
                  placeholder="nombre@correo.com"
                  required
                />
              </div>
              <button className="btn btn-primary w-100" type="submit">
                Solicitar recuperación
              </button>
              {message && <div className="alert alert-info mt-3 mb-0" role="status">{message}</div>}
              <p className="text-center mb-0 mt-4">
                <Link to="/login">Volver a iniciar sesión</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
