import React, { Fragment, useState, useEffect } from 'react';
import {isEmpty, size} from "lodash";

import shortid from "shortid";

const Formulario = () => {
  
    
    const descripcionTarea = 'Lorem ipsum consectetuer.'  

    const [task, setTask] = useState('')
    // const [tasks, setTasks] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [id, setId] = useState("")

    // localStorage
    const [tasks, setTasks] = useState(() => {
      const taskLocal = localStorage.getItem("dato");
      if (taskLocal) {
          return JSON.parse(taskLocal);
      }
      else {
        return [];
      }
    });

    useEffect(() => {
        localStorage.setItem("dato", JSON.stringify(tasks));
    }, [tasks]);
  
    
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
            <div className='mt-2'>
              <div className='row'>
                <div className='col-11 ml-2'>
                {
                  size(tasks) == 0 ? (
                    <h4 className='text-center lead' style={{color:"black"}}>No hay tareas</h4>
                  ) : (
                        <ul className='list-group'>
                            {
                                tasks.map((task) =>(
                                    <li key={task.id} className='list-group-item list-group-item-danger mb-2'>
                                        <span className='lead' style={{color: 'red', fontWeight: 'bold'}}>{task.name}</span>
                                        <p style={{color:'black'}}>{descripcionTarea}</p>
                                        
                                        <button 
                                          className='btn btn-danger btn-sm float-center mx-3'
                                          onClick={() => deleteTask(task.id)}
                                        >
                                          <i class="bi bi-trash"></i>
                                        </button>

                                        <button 
                                          className='btn btn-warning btn-sm float-center'
                                          onClick={() => editTask(task)}
                                        >
                                          <i class="bi bi-pencil-square"></i>
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                      )
                }
                </div>
              </div>
            </div>
            
            <div style={{clear: 'both'}}></div>

            <div className='row mt-3' style={{bottom:"6px"}}>
              <div className="col-11 ml-3">

                <form className='flex-row' onSubmit={editMode ? saveTask : addTask}>
                    <input type="text" className="form-control mb-2" placeholder="Add task"
                        onChange={(text) => setTask(text.target.value)}
                        value={task}
                    />
                    <button className={editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"} type="submit">
                        {editMode ? <i class="bi bi-save"> Save</i> : <i class="bi bi-file-earmark-plus"> Add</i>}
                    </button>
                </form>
              </div>
            </div>
        </Fragment>
      );
}
 
export default Formulario;