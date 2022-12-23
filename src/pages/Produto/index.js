import { useParams } from 'react-router-dom'

const Produto = () => {
  const { id } = useParams()
  return (
    <div>
      <h2>Página Detalhe do Produto</h2>
      <span>Meu produto é {id}</span>
    </div>
  )
}

export default Produto
