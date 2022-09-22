import React, {Fragment, useState} from 'react'

const Form = () => {


    const [titulo, setTitulo] = useState('');


    const handleChange = (event) =>{
        setTitulo(event.target.value)
        // console.log(titulo);
        
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(titulo);
    }

 

    return (
        <Fragment>
           <div>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex align-items-center mt-3 border-top pt-3'>
                        <label className='me-2'>Titulo</label>
                        <input className='form-control'  value={titulo} placeholder='Ingrese titulo' onChange={handleChange} type="text" />
                    </div>

                    <button className='btn btn-success w-100 mt-3' type='submit'>Agregar</button>
                </form>
            </div>
        </Fragment>
        
      );
}
 
export default Form;