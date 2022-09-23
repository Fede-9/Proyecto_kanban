import React, { Fragment, useState } from 'react';
import {isEmpty, size} from "lodash";

import shortid from "shortid";

const Formulario = () => {

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [id, setId] = useState("")
  
    // validacion de la tarea
    const addTask = (e) => {
      e.preventDefault()
      if (isEmpty(task)){
        console.log('Tarea vacia')
        return
      }
  
      const newTask = {
        id: shortid.generate(),
        name: task
      }
  
      setTasks([ ...tasks, newTask ])
      setTask("")
    }
  
    const saveTask = (e) => {
      e.preventDefault()
      if (isEmpty(task)){
        console.log("Task empty")
        return
      }
  
      const editedTasks = tasks.map(item => item.id === id ? {id, name: task} : task)
      setTasks(editedTasks)
      setEditMode(false)
      setTask("")
      setId("")
    }
  
    const deleteTask = (id) => {
      const filteredTasks = tasks.filter(task => task.id !== id)
      setTasks(filteredTasks)
    }
  
    const editTask = (theTask) => {
      setTask(theTask.name)
      setEditMode(true)
      setId(theTask.id)
    }
    
    return (
        <Fragment>
            <div className='container mt-5'>
               {/* <h4>Lista de Tareas</h4> */}
               <div className='row'>
                    <div className='col-5'>

                    {
                        size(tasks) == 0 ? (
                            <h4>No hay tareas</h4>
                        ) : (

                                <ul className='list-group' >

                                    {
                                        tasks.map((task) =>(
                                            <li key={task.id} className='list-group-item'>
                                                <span className='lead'>{task.name}</span>
                                                <p>Crear tablero kanban</p>
                                                <button 
                                                className='btn btn-danger btn-sm float-right mx-1'
                                                onClick={() => deleteTask(task.id)}>
                                                    Eliminar
                                                </button>

                                                <button 
                                                className='btn btn-warning btn-sm float-right'
                                                // onClick={() => editarTarea(tarea.id)}
                                                onClick={() => editTask(task)}
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

                    <div className="col-4">
                        <h4 className="text-center">
                        {/* {editMode ? "Modificar Tarea" : "Agregar Tarea"} */}
                        </h4>
                        <form onSubmit={editMode ? saveTask : addTask}>
                            <input type="text" className="form-control mb-2" placeholder="Ingrese titulo..."
                                onChange={(text) => setTask(text.target.value)}
                                value={task}
                            />
                            <button className={editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"} type="submit">
                                {editMode ? "Guardar" : "+ Agregar Tarea"}
                            </button>
                        </form>
                     </div>
                </div>
            </div>
            
        </Fragment>
      );
}
 
export default Formulario;