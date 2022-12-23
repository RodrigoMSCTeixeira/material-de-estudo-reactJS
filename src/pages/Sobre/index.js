import '../../app.css'
import { Link } from 'react-router-dom'

const Sobre = () => {
  return (
    <div>
      <h1>Bem vind a pagina Sobre</h1>
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
    </div>
  )
}

export default Sobre
