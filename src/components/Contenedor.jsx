import React, {useState} from 'react'
import Columna from './Columna'

const Contenedor = ({}) => { 



    const [listaItems, setItemsCards] = useState([])

    const agregarItem = (tituloItem,idColumna) => {

        const nuevoItem = {
            id: Math.floor(Math.random()*1000),
            titulo: tituloItem,
            columna: Number(idColumna)
          }

        setItemsCards([...listaItems, nuevoItem])
    }

    console.log(listaItems)

    return (
        <>
            <div className="border bg-secondary rounded-3 border d-flex justify-content">
                {columnas.map(columna =>
                    <Columna key={columna.id} columna={columna} agregarItem={agregarItem} listaItems={listaItems}/>
                )}
            </div>
        </>
    ) 

}  

export default Contenedor;