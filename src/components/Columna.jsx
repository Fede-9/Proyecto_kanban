import React, {useState, Fragment} from 'react'
import Formulario from './Formulario'


const Columna = () => {

    const [columna, setColumna] = useState([{
        id:1,
        nombre:'Pendiente',
        descripcion: 'Tomar cerveza'
    },{
        id:2,
        nombre:'En proceso',
        descripcion: 'Tomar vino'
    },{
        id:3,
        nombre:'En pausa',
        descripcion: 'Tomar wisky'
    },{
        id:4,
        nombre:'Realizado',
        descripcion: 'Tomar gin'
    }]) 


    const agregarTarea = () =>{

    }


  return (

    <Fragment>
        <div className='m-1'>
                <div className='w-100 h-auto rounded-1 d-flex flex-column justify-content-between text-white p-2 bg-dark'>
                    <div className='bg-dark d-flex justify-content-between align-items-center border-bottom'>
                        <h4>{columna.nombre}</h4>
                        <button className='btn btn-dark ms-5 mb-2'>. . .</button>
                    </div>
                    <div className='bg-dark container h-auto p-2 me-5 d-flex justify-content-between flex-column'>

                        {/* {columna.map(col =>  } */}

                        <div>
                            <Formulario />  <button onClick={agregarTarea} className='w-100 text-start btn btn-dark'>+ Agregar Tarea</button>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default Columna;