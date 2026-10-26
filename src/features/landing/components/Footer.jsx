import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-dark mt-auto">
      <div className="container py-4 d-flex flex-column align-items-center text-center gap-3">
        <Link className="text-white text-decoration-none fw-bold" to="/">Nébula <span className="d-block small text-white-50">GAMING SYSTEMS</span></Link>
        <p className="text-white-50 mb-0">Computadores para jugar, estudiar y trabajar.</p>
        <small className="text-white-50">© 2026 Nébula Gaming</small>
      </div>
    </footer>
  )
}
