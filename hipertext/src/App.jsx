import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContainerTitle from './components/ContainerTitle/ContainerTitle'
import ContainerOptions from './components/ContainerOptions/ContainerOptions'
import Footer from './components/Footer/Footer'
import './App.css'

// Rotas 
import Home from './pages/Home'
import Colonia from './pages/Colonia'
import Imperio from './pages/Imperio'
import Republica from './pages/Republica'



function App() {
  return (
    <div className='app'>
      <BrowserRouter>
       
        <ContainerTitle />
        <ContainerOptions />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nacionalismo-no-contexto-colonial" element={<Colonia />} />
          <Route path="/nacionalismo-no-contexto-do-imperio" element={<Imperio />} />
          <Route path="/nacionalismo-no-contexto-da-republica" element={<Republica />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
