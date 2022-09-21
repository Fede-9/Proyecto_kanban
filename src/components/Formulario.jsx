import React, {Fragment, useState} from 'react'


const Formulario = ({editState, agregarItem, columna}) => {

    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [idColumna, setIdColumna] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        agregarItem(titulo, idColumna)
        // console.log(titulo,idColumna)

        editState()
    }

    const handleChangeTitulo = (e) => {
        const value = e.target.value
        const idColumna = e.target.id
        setTitulo(value)
        setIdColumna(idColumna)
    }

    // const handleChangeDescripcion = (e) => {
    //     const value = e.target.value
    //     const idColumna = e.target.id
    //     setDescripcion(value)
    //     setIdColumna(idColumna)
    // }

  return (
    <Fragment>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='d-flex align-items-center mt-3 border-top pt-3'>
                    <label className='me-2' htmlFor="TituloPendiente">Titulo</label>
                    <input className='form-control' id={columna.id} value={titulo} onChange={handleChangeTitulo} type="text" />
                </div>


                {/* <div>
                    <label className='me-2 p-1' htmlFor="DescripcionPendiente">Descripcion</label>
                    <input className='form-control' id={columna.id} value={descripcion} onChange={handleChangeDescripcion} type="text" />
                </div> */}

                
                <button className='btn btn-success w-100 mt-3' type='submit'>Agregar</button>
            </form>
        </div>
    </Fragment>
  )
}

export default Formulario