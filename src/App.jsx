import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import FormmularioProovedor from './components/FormmularioProovedor'
import CatalogoProveedores from './components/CatalogoProveedores'
import './App.css'

function App() {
  const [proveedorEditar, setProveedorEditar] = useState(null)

  return (
    <main>
      <section>
        <FormmularioProovedor proveedorEditar={proveedorEditar} />
      </section>

      <section>
        <h2>Catálogo de Proveedores</h2>
        <CatalogoProveedores alEditar={setProveedorEditar} />
      </section>
    </main>
  )
}

export default App
