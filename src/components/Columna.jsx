import React, {Fragment, useState} from 'react'

const Columna = () => {

    const [datos, setDatos] = useState({
        id: 1,
        nombre: 'Pendiente'
    },{
        id: 2,
        nombre: 'En proceso'
    },{
        id: 3,
        nombre: 'En pausa'
    },{
        id: 4,
        nombre: 'Realizado'
    })

    return (
        <Fragment>

        </Fragment>
      );
}
 
export default Columna;
