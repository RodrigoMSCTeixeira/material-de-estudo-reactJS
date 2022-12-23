import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
      <h2>Menu principal</h2>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </header>
  )
}

export default Header
