import axios from 'axios';
import React,{useState, useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';


const endpoint = 'http://localhost:8000/api/interesado/'

const EditarInteresado = () => {
    const [identificacion,setIdentificacion]= useState('')
    const [nombre_apellido,setNombre_apellido]= useState('')
    const [fecha_nacimiento,setFecha_nacimiento]= useState('')
    const [celular,setCelular]= useState('')
    const [telefono,setTelefono]= useState('')
    const [correo,setCorreo]= useState('')
    const [estado_civil,setEstado_civil]= useState('')
    const [sexo,setSexo]= useState('')
    const [ubicacion,setUbicacion]= useState('')
    const navigate = useNavigate()
    const {id} = useParams()


    const update = async(e) =>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`,{
            identificacion: identificacion,
            nombre_apellido:nombre_apellido,
            fecha_nacimiento:fecha_nacimiento,
            celular:celular,
            telefono:telefono,
            correo:correo,
            estado_civil:estado_civil,
            sexo:sexo,
            ubicacion:ubicacion
        })
        navigate('/')
    }
    useEffect(() => {
        const getInteresadoById = async() => {
            const response = await axios.get(`${endpoint}${id}`)
            setIdentificacion(response.data.identificacion)
            setNombre_apellido(response.data.nombre_apellido)
            setFecha_nacimiento(response.data.fecha_nacimiento)
            setCelular(response.data.celular)
            setTelefono(response.data.telefono)
            setCorreo(response.data.correo)
            setEstado_civil(response.data.estado_civil)
            setSexo(response.data.sexo)
            setUbicacion(response.data.ubicacion)
        }
        getInteresadoById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    return (
    <div>
        <div className="card" >
            <div className="card-header">
                <h1>Editar Usuario</h1>
            </div>
            <div className="card-body">
                <form onSubmit={update}>
                    <div className="mb-3">
                        <label className='form-label'>Identificación:</label>
                        <input 
                            type="number" 
                            value={identificacion} 
                            onChange={e => setIdentificacion(e.target.value)}
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Nombres y Apellidos:</label>
                        <input 
                            type="text" 
                            value={nombre_apellido} 
                            onChange={e => setNombre_apellido(e.target.value)}
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                    <label className='form-label'>Fecha de nacimiento:</label>
                        <input 
                            type="date"  
                            value={fecha_nacimiento} 
                            onChange={e => setFecha_nacimiento(e.target.value)}
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                    <label className='form-label'>Celular:</label>
                        <input 
                            type="number" 
                            value={celular} 
                            onChange={e => setCelular(e.target.value)}
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                    <label className='form-label'>Telefono:</label>
                        <input 
                            type="number" 
                            value={telefono} 
                            onChange={e => setTelefono(e.target.value)}
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                    <label className='form-label'>Correo:</label>
                        <input 
                            type="email"  
                            value={correo} 
                            onChange={e => setCorreo(e.target.value)}
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                    <label className='form-label'>Estado civil:</label>
                        <select required className="form-control" name="estado_civil" id="estado_civil"  onChange={e => setEstado_civil(e.target.value)} >
                        <option value={estado_civil}>{estado_civil}</option>
                        <option value="Casado">Casado</option>
                        <option value="Soltero">Soltero</option>
                        <option value="Union libre">Divorciado</option>
                        <option value="Viudo">Viudo</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    <label className='form-label'>Genero:</label>
                    <select required className="form-control" name="estado_civil" id="estado_civil"  onChange={e => setSexo(e.target.value)} >
                        <option value={sexo}>{sexo}</option>
                        <option value="Maculino">Maculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Sin especificar">Sin especificar</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    <label className='form-label'>Ubicación:</label>
                        <input 
                            type="text" 
                            value={ubicacion} 
                            onChange={e => setUbicacion(e.target.value)}
                            className='form-control'
                        />
                    </div>
                    <div className="card-footer text-muted">
                        <a href="/" className="btn btn-secondary" tabindex="5">Cancelar</a>
                        <button type='submit' className="btn btn-primary">Editar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
} 

export default EditarInteresado