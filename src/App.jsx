import './App.css'
import Land from './Land'
import { Routes, Route } from 'react-router-dom'
import Suppert from './page/Suppert'
import Privacy from './page/Privacy'
function App() {
  
  return (
    <div className='relative max-w-screen'>
     <Routes>
      <Route path="/" element={<Land />} />
      <Route path="/Suppert" element={<Suppert />} />
      <Route path="/Privacy" element={<Privacy />} />
    </Routes>

    </div>
  )
}

export default App
