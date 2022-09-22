import React, { Fragment, useState } from 'react'
import Form from './Form'


const ContForm = () => {

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
          <div className='m-2 p-1'>
                <div className='columna w-100 h-auto rounded-3 d-flex flex-column justify-content-between text-white p-4 p-2' >
                  
                    
                      <div className='row  justify-content-center '>
                          <div className='col-3 justify-content-between align-items-center border-bottom'>
                              <h4 className="font text-dark rounded-pill m-2 p-2">{columna.nombre}</h4>
                              
                          </div>
                        
                          <div className='container h-auto p-2 me-5 d-flex justify-content-between flex-column'>
                              <div>
                                  { <Form />}
                              </div>
                          </div>
                      </div>

                  </div>
            </div>

        </Fragment>
      );
}
 
export default ContForm;