const personas = [
  {
    nombre: 'Akiliu Lemma',
    imagen: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80',
    tamano: 100,
  },
  {
    nombre: 'Lin Lanying',
    imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&h=240&q=80',
    tamano: 76,
  },
  {
    nombre: 'María López',
    imagen: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=240&h=240&q=80',
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
  <main className="flex-grow-1">
    <div className="container py-5">
      <div className="text-center mb-4">
        <p className="text-primary fw-semibold mb-2">React · Componentes</p>
        <h1 className="display-5 fw-bold mb-3">Props en acción</h1>
        <p className="text-secondary mb-0 mx-auto">
          El mismo componente Avatar recibe una persona y un tamaño diferentes.
        </p>
      </div>
      <section className="d-flex flex-wrap align-items-center justify-content-center gap-4 p-4 border rounded-3 bg-body-tertiary" aria-label="Avatares configurados con props">
        {personas.map((persona) => (
          <Avatar key={persona.nombre} persona={persona} size={persona.tamano} />
        ))}
      </section>
      <p className="text-center text-secondary mt-3 mb-0">
        Cada avatar cambia según las props <code>persona</code> y <code>size</code>.
      </p>
    </div>
  </main>
)
