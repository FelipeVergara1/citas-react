const Paciente = ({ pcte, setPaciente, eliminarPcte }) => { 
    
    const handleEliminar = () => {
        const respuesta = confirm("¿Desea eliminar este paciente?")

        if (respuesta) {
            eliminarPcte(pcte.id)
        }
    }

  return (
    <div className="m-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase">
              Nombre: {' '}
              <span className="font-normal normal-case">{pcte.nombre}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
              Propietario: {' '}
              <span className="font-normal normal-case">{pcte.propietario}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
              Email: {' '}
              <span className="font-normal normal-case">{pcte.email}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
              Fecha Alta: {' '}
              <span className="font-normal normal-case">{pcte.fecha}</span>
          </p> 

          <p className="font-bold mb-3 text-gray-700 uppercase">
              Sintomas: {' '}
              <span className="font-normal normal-case">{pcte.sintomas}</span>
          </p>

          <div className="flex justify-between mt-10">
            <button
                type="button" 
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => setPaciente(pcte)}
            >
                Editar
            </button>
          
            <button 
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar}
            >
                Eliminar
            </button>
          </div>
      </div>
  )
}

export default Paciente
