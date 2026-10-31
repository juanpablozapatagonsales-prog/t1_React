import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const equipos = [
  {
    marca: "ASUS ROG",
    modelo: "ROG Strix G16",
    descripcion: "Portátil gaming de la línea Republic of Gamers.",
    sigla: "ROG",
  },
  {
    marca: "Lenovo",
    modelo: "LOQ 15",
    descripcion: "Un equipo versátil para jugar, estudiar y trabajar.",
    sigla: "LOQ",
  },
  {
    marca: "ASUS TUF",
    modelo: "TUF Gaming A15",
    descripcion: "Rendimiento gaming en la familia TUF Gaming.",
    sigla: "TUF",
  },
];

export const Main = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [carouselHovered, setCarouselHovered] = useState(false);
  const [carouselFocused, setCarouselFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const carouselIsPaused =
    carouselPaused || carouselHovered || carouselFocused || reducedMotion;

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = (event) =>
      setReducedMotion(event.matches);

    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (carouselIsPaused) return undefined;

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActiveSlide((current) => (current + 1) % equipos.length);
      }
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [carouselIsPaused]);

  return (
    <main id="main-content" className="flex-grow-1 container-fluid fst-italic">
    <section className="bg-black text-light">
      <div className="container py-5">
        <div className="row align-items-center g-4 g-lg-5 py-lg-4">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <p className="text-info fw-semibold text-uppercase mb-3">
              Potencia para ir más allá
            </p>
            <h1 className="display-3 fw-bold">
              El siguiente nivel{" "}
              <span className="text-info">empieza aquí.</span>
            </h1>
            <p className="lead text-light my-4">
              Equipos gaming para jugar sin límites, crear y hacer realidad cada
              proyecto. Encuentra tu próximo ASUS ROG, TUF Gaming o Lenovo LOQ.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
              <a className="btn btn-primary btn-lg px-4" href="#equipos">
                Explorar equipos <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn-outline-light btn-lg px-4" href="#marcas">
                Ver marcas
              </a>
            </div>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 mt-5">
              <div>
                <strong className="d-block fs-4">3</strong>
                <span className="text-light">líneas destacadas</span>
              </div>
              <div>
                <strong className="d-block fs-4">100%</strong>
                <span className="text-light">gaming a tu manera</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <section
              className="rounded-4 overflow-hidden shadow"
              role="region"
              aria-roledescription="carrusel"
              aria-label="Equipos destacados"
              onMouseEnter={() => setCarouselHovered(true)}
              onMouseLeave={() => setCarouselHovered(false)}
              onFocusCapture={() => setCarouselFocused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setCarouselFocused(false);
                }
              }}
            >
              <div className="overflow-hidden">
                <div
                  className="d-flex"
                  style={{
                    transform: `translateX(-${activeSlide * 100}%)`,
                    transition: reducedMotion
                      ? "none"
                      : "transform 500ms ease",
                  }}
                  aria-live={carouselIsPaused ? "polite" : "off"}
                >
                  {equipos.map((equipo, index) => (
                    <div
                      className="w-100 flex-shrink-0"
                      style={{ minWidth: "100%" }}
                      role="group"
                      aria-roledescription="diapositiva"
                      aria-label={`${index + 1} de ${equipos.length}`}
                      aria-hidden={index !== activeSlide}
                      key={equipo.modelo}
                    >
                      <div className="ratio ratio-4x3 bg-primary">
                        <div className="d-flex flex-column justify-content-center align-items-center text-center p-4 p-md-5">
                          <span className="badge rounded-pill text-bg-dark mb-3">
                            {equipo.marca}
                          </span>
                          <span
                            className="display-1 fw-bold text-white"
                            aria-hidden="true"
                          >
                            {equipo.sigla}
                          </span>
                          <h2 className="h4 text-white mb-0">
                            {equipo.modelo}
                          </h2>
                          <p className="text-white mb-0 mt-2">
                            {equipo.descripcion}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 p-3 bg-dark">
                <button
                  className="btn btn-sm btn-outline-light"
                  type="button"
                  aria-label="Equipo anterior"
                  onClick={() =>
                    setActiveSlide(
                      (current) =>
                        (current - 1 + equipos.length) % equipos.length,
                    )
                  }
                >
                  Anterior
                </button>
                {equipos.map((equipo, index) => (
                  <button
                    className={`btn btn-sm ${
                      index === activeSlide ? "btn-info" : "btn-outline-info"
                    }`}
                    type="button"
                    aria-label={`Mostrar ${equipo.modelo}`}
                    aria-pressed={index === activeSlide}
                    key={equipo.modelo}
                    onClick={() => setActiveSlide(index)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className="btn btn-sm btn-outline-light"
                  type="button"
                  aria-label="Siguiente equipo"
                  onClick={() =>
                    setActiveSlide((current) => (current + 1) % equipos.length)
                  }
                >
                  Siguiente
                </button>
                <button
                  className="btn btn-sm btn-outline-info"
                  type="button"
                  disabled={reducedMotion}
                  aria-pressed={carouselPaused}
                  onClick={() => setCarouselPaused((paused) => !paused)}
                >
                  {reducedMotion
                    ? "Movimiento automático desactivado"
                    : carouselPaused
                      ? "Reanudar cambio automático"
                      : "Pausar cambio automático"}
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    <div className="container py-5">
      <section
        className="mb-5 pb-4 border-bottom border-secondary"
        id="marcas"
        aria-label="Marcas disponibles"
      >
        <div className="row align-items-center text-center g-3">
          <div className="col-12 col-md-4">
            <span className="small text-uppercase fw-semibold text-light">
              Marcas que te llevan más lejos
            </span>
          </div>
          <div className="col-6 col-md fw-bold fs-4">ASUS</div>
          <div className="col-6 col-md fw-bold fs-4">ROG</div>
          <div className="col-6 col-md fw-bold fs-4">Lenovo</div>
          <div className="col-6 col-md fw-bold fs-4">LOQ</div>
        </div>
      </section>

      <section className="mb-5" id="equipos" aria-labelledby="products-title">
        <div className="text-center mb-4">
          <p className="text-info fw-semibold text-uppercase mb-2">
            Encuentra tu setup
          </p>
          <h2 className="display-6 fw-bold" id="products-title">
            Computadores para jugar
          </h2>
          <p className="text-light mb-0">
            Explora algunas de las líneas más buscadas.
          </p>
        </div>

        <div className="row g-4">
          {equipos.map((equipo) => (
            <div className="col-12 col-md-6 col-lg-4" key={equipo.modelo}>
              <article className="card h-100 bg-dark border-secondary shadow-sm">
                <div className="ratio ratio-16x9 bg-primary">
                  <div className="d-flex flex-column justify-content-between align-items-center p-3">
                    <span className="badge rounded-pill text-bg-dark">
                      {equipo.marca}
                    </span>
                    <span
                      className="display-2 fw-bold text-white"
                      aria-hidden="true"
                    >
                      {equipo.sigla}
                    </span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column align-items-center text-center p-4">
                  <p className="small text-uppercase fw-semibold text-info mb-2">
                    {equipo.marca}
                  </p>
                  <h3 className="h5 card-title">{equipo.modelo}</h3>
                  <p className="card-text text-light mb-4">
                    {equipo.descripcion}
                  </p>
                  <Link className="btn btn-outline-info mt-auto" to="/login">
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
  );
};
