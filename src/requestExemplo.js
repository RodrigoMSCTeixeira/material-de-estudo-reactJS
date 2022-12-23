import { useState, useEffect } from 'react'
import './style.css'

// https://sujeitoprogramador.com/rn-api/?api=posts

const App = () => {
  const [nutri, setNutri] = useState([])

  useEffect(() => {
    const loadApi = () => {
      fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
        .then((r) => r.json())
        .then((json) => {
          setNutri(json)
        })
    }
    loadApi()
  }, [])
  return (
    <div className="container">
      <header></header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  )
}

export default App
