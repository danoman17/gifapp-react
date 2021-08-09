import React, { useState } from 'react'

import PropTypes from 'prop-types'; // importamos PropTypes para validaciones


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // Usamos useState para poder tener un valor y su set

    // Función que nos ayuda a poner un valor al 'setInputValue'
    const handleInputChange = ( e ) => {

        setInputValue( e.target.value );

    }

    // Funcion que nos ayuda a dar el submit del form
    const handleSubmit = ( e ) => {

        e.preventDefault(); // Previene que la página se recargue

        if ( inputValue.trim().length > 2 ) {

            setCategories( cats => [inputValue, ...cats] ); // Mandamos el nuevo valor del input a la funcion de 'setCategories'

            setInputValue(''); // debolvemos el valor a string vacia 

        }
    }

    return (
        
         <form onSubmit= { handleSubmit }>
             

            <input 
                type="text" 
                value={ inputValue } 
                onChange={ handleInputChange }
            />

        </form>
       
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired // es requerido recibir una función en este componente
};
