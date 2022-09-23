import React, { Fragment, useState } from 'react'

import Formulario from './Formulario'

const ContForm = ({tarea, tareas}) => {

        const [columna, setColumna] = useState([{
          id: 1,
          nombre:'Pendiente',

      },{
          id: 2,
          nombre:'En Proceso',

      },{
          id: 3,
          nombre:'En Pausa',

      },{
          id: 4,
          nombre:'Realizado',

      }])


    return (
        <Fragment>
          
            <div className='m-2 p-2' >
              {       columna.map((col) =>(


                            <div key={col.id} className='container bg-danger w-50 h-auto rounded-3 d-flex flex-column text-white m-2 p-2'>
                                <div className='d-flex justify-content-between align-items-center border-bottom'>
                                    <h4 className="font text-dark rounded-pill m-2 p-2">{col.nombre}</h4>
                                </div>

                            
                                <div className='container  h-auto p-2 me-5 d-flex justify-content-between flex-column'>

                                    <div>
                                        <Formulario />
                                    </div>
                                </div>
                            </div>

                        ))      
                    }
            </div>
            

        </Fragment>
      );
}
 
export default ContForm;