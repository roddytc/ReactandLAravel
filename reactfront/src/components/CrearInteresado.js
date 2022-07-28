import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';



const endpoint = 'http://localhost:8000/api/interesado'

const CrearInteresado = () => {
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

   
    const onSubmit = async(e) =>{
        e.preventDefault()
        await axios.post(endpoint, {identificacion:identificacion,
            nombre_apellido:nombre_apellido,
            fecha_nacimiento:fecha_nacimiento,
            celular:celular,
            telefono:telefono,
            correo:correo,
            estado_civil:estado_civil,
            sexo:sexo,
            ubicacion:ubicacion})
        navigate('/')
    }


  
    return (
    <div>
        <div className="card" >
            <div className="card-header">
                <h1>Crear Usuario</h1>
            </div>
            <div className="card-body">
                <form >
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
                        <option  selected disabled>Escoge un estado civil</option>
                        <option value="Casado">Casado</option>
                        <option value="Soltero">Soltero</option>
                        <option value="Union libre">Divorciado</option>
                        <option value="Viudo">Viudo</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    <label className='form-label'>Genero:</label>
                    <select required className="form-control" name="sexo" id="sexo"  onChange={e => setSexo(e.target.value)} >
                        <option  selected disabled>Escoge un genero</option>
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
                        <button type='submit' onClick={onSubmit} className="btn btn-primary">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
} 

export default CrearInteresado



