import React, {Fragment, useState} from 'react'

const Formulario = () => {


    


    const [datos, setDatos] = useState({
        titulo: ' '
    })


    const handleInputChange = (event) =>{
        // console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) =>{
        event.preventDefault();
        // console.log(datos.titulo);
    }


    return (
        <Fragment>
           <div>
                <form onSubmit={enviarDatos}>
                    <div className='d-flex align-items-center mt-3 border-top pt-3'>
                        <label className='me-2' htmlFor="TituloPendiente">Titulo</label>
                        <input className='form-control'  name='titulo' placeholder='Ingrese titulo' onChange={handleInputChange} type="text" />
                    </div>

                    <button className='btn btn-success w-100 mt-3' type='submit'>Agregar</button>
                </form>
            </div>
        </Fragment>
        
      );
}
 
export default Formulario;