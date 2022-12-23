import '../../app.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Bem vind a pagina Home</h1>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </div>
  )
}

export default Home
