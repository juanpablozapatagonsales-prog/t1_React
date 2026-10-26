import { Link } from 'react-router-dom'

const equipos = [
  {
    marca: 'ASUS ROG',
    modelo: 'ROG Strix G16',
    descripcion: 'Portátil gaming de la línea Republic of Gamers.',
    estilo: 'primary',
    sigla: 'ROG',
  },
  {
    marca: 'Lenovo',
    modelo: 'LOQ 15',
    descripcion: 'Un equipo versátil para jugar, estudiar y trabajar.',
    estilo: 'info',
    sigla: 'LOQ',
  },
  {
    marca: 'ASUS TUF',
    modelo: 'TUF Gaming A15',
    descripcion: 'Rendimiento gaming en la familia TUF Gaming.',
    estilo: 'danger',
    sigla: 'TUF',
  },
]

export const Main = () => (
  <main className="flex-grow-1">
    <section className="bg-dark text-white">
      <div className="container py-5">
        <div className="row align-items-center g-4 py-lg-4">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <p className="text-info fw-semibold text-uppercase mb-3">Potencia para ir más allá</p>
            <h1 className="display-3 fw-bold">El siguiente nivel <span className="text-info">empieza aquí.</span></h1>
            <p className="lead text-white-50 my-4">
              Equipos gaming para jugar sin límites, crear y hacer realidad cada proyecto.
              Encuentra tu próximo ASUS ROG, TUF Gaming o Lenovo LOQ.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-stretch align-items-sm-center gap-3">
              <a className="btn btn-primary btn-lg px-4" href="#equipos">Explorar equipos <span aria-hidden="true">→</span></a>
              <a className="btn btn-outline-light btn-lg px-4" href="#marcas">Ver marcas</a>
            </div>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 mt-5">
              <div><strong className="d-block fs-4">3</strong><span className="text-white-50">líneas destacadas</span></div>
              <div><strong className="d-block fs-4">100%</strong><span className="text-white-50">gaming a tu manera</span></div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card bg-secondary text-white border-0 shadow-lg">
              <div className="ratio ratio-4x3">
                <div className="d-flex flex-column justify-content-between align-items-center p-4 p-md-5">
                  <span className="badge rounded-pill text-bg-dark align-self-start">Equipos destacados</span>
                  <div className="text-center">
                    <div className="display-1 fw-bold text-info" aria-hidden="true">N</div>
                    <p className="small text-uppercase text-white-50 mb-0">Play beyond</p>
                  </div>
                  <div className="text-center">
                    <span className="d-block small text-uppercase text-white-50">Rendimiento</span>
                    <strong className="fs-5">Diseñado para ganar.</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="container py-5">
      <section className="mb-5 pb-4 border-bottom" id="marcas" aria-label="Marcas disponibles">
        <div className="row align-items-center text-center g-3">
          <div className="col-12 col-md-4">
            <span className="small text-uppercase fw-semibold text-secondary">Marcas que te llevan más lejos</span>
          </div>
          <div className="col-6 col-md fw-bold fs-4">ASUS</div>
          <div className="col-6 col-md fw-bold fs-4">ROG</div>
          <div className="col-6 col-md fw-bold fs-4">Lenovo</div>
          <div className="col-6 col-md fw-bold fs-4">LOQ</div>
        </div>
      </section>

      <section className="mb-5" id="equipos" aria-labelledby="products-title">
        <div className="text-center mb-4">
          <p className="text-primary fw-semibold text-uppercase mb-2">Encuentra tu setup</p>
          <h2 className="display-6 fw-bold" id="products-title">Computadores para jugar</h2>
          <p className="text-secondary mb-0">Explora algunas de las líneas más buscadas.</p>
        </div>

        <div className="row g-4">
          {equipos.map((equipo) => (
            <div className="col-12 col-md-6 col-lg-4" key={equipo.modelo}>
              <article className="card h-100 shadow-sm">
                <div className={`ratio ratio-16x9 text-bg-${equipo.estilo}`}>
                  <div className="d-flex flex-column justify-content-between align-items-center p-3">
                    <span className="badge rounded-pill text-bg-dark">{equipo.marca}</span>
                    <span className="display-2 fw-bold text-white-50" aria-hidden="true">{equipo.sigla}</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column align-items-center text-center p-4">
                  <p className="small text-uppercase fw-semibold text-primary mb-2">{equipo.marca}</p>
                  <h3 className="h5 card-title">{equipo.modelo}</h3>
                  <p className="card-text text-secondary mb-4">{equipo.descripcion}</p>
                  <Link className="btn btn-outline-primary mt-auto" to="/login">
                    Consultar equipo <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
)
