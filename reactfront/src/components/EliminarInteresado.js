import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/interesado/'

const EliminarInteresado = () => {  
        const [identificacion,setIdentificacion]= useState('')
        const [nombre_apellido,setNombre_apellido]= useState('')
        const [celular,setCelular]= useState('')
        const [correo,setCorreo]= useState('')
        const {id} = useParams()
        const navigate = useNavigate() 

        useEffect(() => {
            const getInteresadoByID = async() => {
                const response = await axios.get(`${endpoint}${id}`)
                setIdentificacion(response.data.identificacion)
                setNombre_apellido(response.data.nombre_apellido)
                setCelular(response.data.celular)
                setCorreo(response.data.correo)
            }
            getInteresadoByID()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
        const destroy = async (e) => {
            e.preventDefault()
            await axios.delete(`${endpoint}${id}`,{
            
            })
            navigate('/')
        }

    return(
        <div>
            <div className="card" >
                <div className="card-header">
                    <h1>Eliminar Usuario</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={destroy}>
                        <div className="mb-3">
                            <p><strong>Identificación: </strong>{identificacion} </p>
                        </div>
                        <div className="mb-3">
                            <p><strong>Nombres y apellidos:</strong> {nombre_apellido} </p>
                            
                        </div>
                        <div className="mb-3">
                            <p><strong>Celular: </strong>{celular} </p>
                        </div>
                        <div className="mb-3">
                            <p><strong>Correo: </strong>{correo} </p>
                        </div>
                        <div className="card-footer text-muted">
                            <a href="/" className ="btn btn-secondary" tabindex="5">Cancelar</a>
                            <button onClick={ ()=>destroy(id) } className='btn btn-danger'>Confirmar</button>      
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} 

export default EliminarInteresado