const personajes = [
  {
    nombre: 'Rick Sanchez',
    imagen: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    tamano: 100,
  },
  {
    nombre: 'Morty Smith',
    imagen: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    tamano: 76,
  },
  {
    nombre: 'Summer Smith',
    imagen: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    tamano: 52,
  },
]

const Avatar = ({ persona, size }) => (
  <img
    className="rounded-circle object-fit-cover"
    src={persona.imagen}
    alt={`Retrato de ${persona.nombre}`}
    title={persona.nombre}
    width={size}
    height={size}
    loading="lazy"
    decoding="async"
  />
)

export const PropsDemo = () => (
  <main id="main-content" className="flex-grow-1">
    <div className="container py-5">
      <div className="text-center mb-4">
        <p className="text-primary fw-semibold mb-2">React · Componentes</p>
        <h1 className="display-5 fw-bold mb-3">Props en acción</h1>
        <p className="text-light mb-0 mx-auto">
          El mismo componente Avatar recibe una persona y un tamaño diferentes.
        </p>
      </div>
      <section className="d-flex flex-wrap align-items-center justify-content-center gap-4 p-4 border rounded-3 bg-body-tertiary" aria-label="Avatares configurados con props">
        {personajes.map((persona) => (
          <Avatar key={persona.nombre} persona={persona} size={persona.tamano} />
        ))}
      </section>
      <p className="text-center text-light mt-3 mb-0">
        Cada avatar cambia según las props <code>persona</code> y <code>size</code>.
      </p>
    </div>
  </main>
)
