import React, { Fragment, useState } from 'react'
import Columna  from './Columna'

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
            <h1 style={{color: "orange", position:"absolute", top:"5px", textAlign:"center"}} className="">Tablero Kanban</h1>
                {   
                    columna.map((col) =>(
                        <div key={col.id} className="row ml-3 text-center" style={{height:"500px", width:"300px"}}>
                            <div className='col-11 ml-2 mt-3 mb-3 card' style={{background:"#fa5f49"}}>
                                <h4 className='mt-3' style={{color:"white", fontweight:"bold"}}>{col.nombre}</h4>
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