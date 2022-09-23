import React, { Fragment, useState } from 'react'

import Columna  from './Columna';

const Contenedor = () => {
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
            
                {    columna.map((col) =>(
                        <div key={col.id} className='container'>
                            <div className='card'>
                                <h4>{col.nombre}</h4>
                                <div>
                                    <Columna />
                                    
                                </div>
                            </div>
                                

                        </div>
                                
                ))        
                }
        </Fragment>
      );
}
 
export default Contenedor;