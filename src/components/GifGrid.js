import React from 'react'
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    
    // Usamos un Hook personalizado para traer la información de la petición con desestructuracion
    const { data:images, loading } = useFetchGifs( category ); 

    return (
        
        <>
            <h3 className="animate__animated animate__fadeInDown" > { category } </h3>

            {/* Condicion para poder mostrar mensaje de 'Loading...'  */}

            { loading && <p className="animate__animated animate__flash" >Loading...</p> }
            
            <div className="card-grid" >
                
                {
                    images.map( img => (
                        <GifGridItem  
                        key={ img.id } 
                        { ...img }
                        />
                    ) )
                }
                
                
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired // Se requiere un string como parametro recibido por el componente. 
}
