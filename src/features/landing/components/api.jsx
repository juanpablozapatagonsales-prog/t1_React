import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

const especiesEnEspanol = {
  Alien: "Alienígena",
  Animal: "Animal",
  Cronenberg: "Cronenberg",
  Disease: "Enfermedad",
  Human: "Humano",
  Humanoid: "Humanoide",
  "Mythological Creature": "Criatura mitológica",
  Poopybutthole: "Poopybutthole",
  Robot: "Robot",
  unknown: "Especie desconocida",
};

const estadosEnEspanol = {
  Alive: "Vivo",
  Dead: "Muerto",
  unknown: "Desconocido",
};

export const Api = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(
      () => setQuery(search.trim().toLocaleLowerCase()),
      350,
    );
    return () => window.clearTimeout(timeoutId);
  }, [search]);

  useEffect(() => {
    const controller = new AbortController();

    async function getCharacters() {
      setLoading(true);
      setError("");

      try {
        const { data } = await axios.get(API_URL, {
          params: { page, ...(query ? { name: query } : {}) },
          signal: controller.signal,
        });

        setCharacters(data.results);
        setTotalPages(data.info.pages);
        setTotalCharacters(data.info.count);
      } catch (requestError) {
        if (controller.signal.aborted) return;

        if (requestError.response?.status === 404) {
          setCharacters([]);
          setTotalPages(0);
          setTotalCharacters(0);
        } else {
          setError("No se pudieron cargar los personajes. Inténtalo de nuevo.");
          setCharacters([]);
          setTotalPages(0);
          setTotalCharacters(0);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    getCharacters();
    return () => controller.abort();
  }, [page, query]);

  const firstVisiblePage = Math.max(1, Math.min(page - 2, totalPages - 4));
  const visiblePages = Array.from(
    { length: Math.min(totalPages, 5) },
    (_, index) => firstVisiblePage + index,
  );

  return (
    <main id="main-content" className="container flex-grow-1 py-4 py-md-5">
      <header className="text-center mb-4 mb-md-5">
        <h1 className="display-5 fw-bold">Rick y Morty</h1>
      </header>

      <section className="mb-4" aria-label="Buscar personajes">
        <label htmlFor="character-search" className="form-label fw-semibold">
          Buscar por nombre
        </label>
        <div className="input-group">
          <input
            id="character-search"
            className="form-control"
            type="search"
            placeholder="Busca un personaje"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
          />
          {search && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => {
                setSearch("");
                setPage(1);
              }}
            >
              Limpiar
            </button>
          )}
        </div>
      </section>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!error && loading && (
        <div
          className="d-flex justify-content-center align-items-center gap-2 py-5"
          role="status"
        >
          <span className="spinner-border spinner-border-sm text-primary" />
          <span>Cargando personajes...</span>
        </div>
      )}

      {!loading && !error && characters.length === 0 && (
        <div className="alert alert-info text-center" role="status">
          No se encontraron personajes con ese nombre.
        </div>
      )}

      {!loading && !error && characters.length > 0 && (
        <>
          <p className="text-light mb-3" aria-live="polite">
            {totalCharacters} personajes encontrados
          </p>
          <div className="row g-3 g-md-4">
            {characters.map((character) => (
              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-3"
                key={character.id}
              >
                <article className="card h-100">
                  <img
                    className="card-img-top"
                    src={character.image}
                    alt={`Imagen de ${character.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="card-body d-flex flex-column">
                    <h2 className="card-title h5">{character.name}</h2>
                    <p className="card-text text-light mb-2">
                      {especiesEnEspanol[character.species] ?? "Otra especie"}
                    </p>
                    <div className="mt-auto">
                      <span
                        className={`badge rounded-pill text-bg-${
                          character.status === "Alive"
                            ? "success"
                            : character.status === "Dead"
                              ? "secondary"
                              : "primary"
                        }`}
                      >
                        {estadosEnEspanol[character.status] ?? "Desconocido"}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="mt-4" aria-label="Paginación de personajes">
              <ul className="pagination justify-content-center flex-wrap mb-0">
                <li className={`page-item${page === 1 ? " disabled" : ""}`}>
                  <button
                    className="page-link"
                    type="button"
                    disabled={page === 1 || loading}
                    onClick={() => setPage((currentPage) => currentPage - 1)}
                    aria-label="Página anterior"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                      />
                    </svg>
                  </button>
                </li>
                {visiblePages.map((pageNumber) => (
                  <li
                    className={`page-item${pageNumber === page ? " active" : ""}`}
                    key={pageNumber}
                  >
                    <button
                      className="page-link"
                      type="button"
                      disabled={loading}
                      onClick={() => setPage(pageNumber)}
                      aria-current={pageNumber === page ? "page" : undefined}
                      aria-label={`Página ${pageNumber}`}
                    >
                      {pageNumber}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item${page === totalPages ? " disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    type="button"
                    disabled={page === totalPages || loading}
                    onClick={() => setPage((currentPage) => currentPage + 1)}
                    aria-label="Página siguiente"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </main>
  );
};
