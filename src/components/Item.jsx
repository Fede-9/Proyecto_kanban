import React from 'react'
import '../index.css'

const Item = ({item}) => {


   


  return (
    <>
        <div>
            <ol className="list-group mb-2">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className='descripcion border'>
                        <span className="fw-bold">{item.titulo}</span>
                        <p className='parrafo'>Sacar al perro mañana a las 9:20</p>
                    </div>
                    <button>Borrar</button>
                    <button>Editar</button>
                    
                </li>
            </ol>
        </div>
    </>
  )
}

export default Item