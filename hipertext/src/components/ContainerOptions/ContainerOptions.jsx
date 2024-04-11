import { Link } from 'react-router-dom'
import './ContainerOptions.css'

const ContainerOptions = () => {
  return (
    <div className="row-options">
          <Link to="/" className="options" aria_current="page">INÍCIO</Link>
          <Link to="/nacionalismo-no-contexto-colonial" className="options" aria-current="page">COLÔNIA</Link>
          <Link to="/nacionalismo-no-contexto-do-imperio" className="options" aria-current="page">IMPÉRIO</Link>
          <Link to="/nacionalismo-no-contexto-da-republica"  className="options" aria-current="page">REPÚBLICA</Link>
    </div>
  )
}

export default ContainerOptions