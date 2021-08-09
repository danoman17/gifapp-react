// usamos el snipet rafc para crear el componente mas rápido.

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    
    const [categories, setCategories] = useState( defaultCategories ); // usamos useState para las categorias

    return (
        <>
            <h2>Gif App</h2>  
            
            <AddCategory setCategories={ setCategories } /> 

            <hr/>

            <ol>
                { 
                    categories.map( category => 
                         <GifGrid 
                            key={ category } 
                            category={ category }
                          />
                    )

                }
            </ol>
        </>
    )
}
