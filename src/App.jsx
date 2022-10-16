import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() { 
  const pctesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
  const [pacientes, setPacientes] = useState(pctesLS)
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPcte = id => {
    const pctesBusqueda = pacientes.filter( pcte => pcte.id !== id )
    setPacientes(pctesBusqueda)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPcte={eliminarPcte}
        />
      </div>
    </div>
  )
}

export default App