import React, {Fragment, useState} from 'react';
import Columna from './Columna'




const Contenedor = ({columna}) => {




    return (
        <Fragment>
            <div className='container'>
                <div className="d-flex justify-content">
                    {columna.map(col =>
                        <Columna key={col.id} />
                    )}
                </div>
            </div>
        </Fragment>
      );
}
 
export default Contenedor;