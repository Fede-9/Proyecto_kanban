import React, {Fragment, useState} from 'react'
import {size} from 'lodash'


const Form = () => {


    const [tarea, setTarea] = useState('');

    const [tareas, setTareas] = useState([]);

    const [editar, setEditar] = useState(false);

    const [id, setId] = useState('');


    const handleChange = (event) =>{
        setTarea(event.target.value)
        // console.log(titulo);
        
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        const newTask = {
            id: Math.floor(Math.random() * 1000),
            titulo: tarea
        }
        // console.log(titulo);

        setTareas([...tareas, newTask])

        setTarea('')
    }




    const eliminarTarea = (id) =>{
        const filterTareas = tareas.filter( tarea => tarea.id !== id)
        setTareas(filterTareas)
    }


    const editarTarea = (elemento) =>{
        setTarea(elemento.titulo)
        setEditar(true)
        setId(id)
    }

 

    return (
        <Fragment>
            <div className='container mt-5'>
               <h4>Lista de Tareas</h4>
               <div className='row'>
                    <div className='col-5'>

                    {
                        size(tareas) == 0 ? (
                            <h4>No hay tareas</h4>
                        ) : (

                                <ul className='list-group' >

                                    {
                                        tareas.map((tarea) =>(
                                            <li key={tarea.id} className='list-group-item'>
                                                <span className='lead'>{tarea.titulo}</span>
                                                <p>Crear tablero kanban</p>
                                                <button 
                                                className='btn btn-danger btn-sm float-right mx-1'
                                                onClick={() => eliminarTarea(tarea.id)}>
                                                    Eliminar
                                                </button>

                                                <button 
                                                className='btn btn-warning btn-sm float-right'
                                                // onClick={() => editarTarea(tarea.id)}
                                                onClick={() => editarTarea(tarea)}
                                                >
                                                    Editar
                                                </button>

                                            </li>

                                        ))
                                    }

                                </ul>
                        )
                    }
                    </div>

                    <div className='col-5'>
                       
                        <form onSubmit={handleSubmit}>
                            <input
                             type="text" 
                             className='form-control mb-2' 
                             placeholder='Ingrese Titulo...' 
                             onChange={(text) => setTarea(text.target.value)}
                             value={tarea} />
                            <button 
                            className='btn btn-dark'
                            type='submit'>+ Agregar Tarea</button>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
        
      );
}
 
export default Form;