import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ListInteresado = () => {
  const [ interesados, setInteresados ] = useState( [] )

  useEffect ( ()=> {
      getAllInteresados()
  }, [])

  const getAllInteresados = async () => {
    const response = await axios.get(`${endpoint}/interesados`)
    setInteresados(response.data)
  }

  return (
    <div>
        <div>
            <Link to="/crear" className='btn btn-primary btn-lg mt-2 mb-2 text-white'>Crear</Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-success text-white'>
                <tr>
                    <th>Identificacion</th>
                    <th>Nombres</th>
                    <th>celular</th>
                    <th>Correo Electronico</th>
                    <th>Acción</th>

                </tr>
            </thead>
            <tbody>
                { interesados.map( (interesado) => (
                    <tr key={interesado.id}>
                        <td> {interesado.identificacion} </td>    
                        <td> {interesado.nombre_apellido} </td>    
                        <td> {interesado.celular} </td>
                        <td> {interesado.correo} </td>        
                        <td>
                            <Link to={`/editar/${interesado.id}`} className='btn btn-primary'>Editar</Link>
                            <Link  to={`/eliminar/${interesado.id}`} className='btn btn-danger'>Eliminar</Link>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default ListInteresado
