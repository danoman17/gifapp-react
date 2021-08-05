// usamos el snipet rafc para crear el componente mas rápido.

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['Obi-Wan']);

    // const handleAdd = () => {
    //      setCategories( [...categories,'The Breaking Bad'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>  

            <AddCategory setCategories={ setCategories } />

            <hr/>

            <ol>
                { 
                    categories.map( category => 
                         <GifGrid key={ category } category={ category }/>
                    )

                }
            </ol>
        </>
    )
}
