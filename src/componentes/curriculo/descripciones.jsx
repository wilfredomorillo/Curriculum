import './descripcion.scss'
import React from 'react'


function Descripcion({descripcion}) {

return(
    <div className='Descripcion'>
        {descripcion.map((descripcion, index)=>{
             return(
                <article className='Description__item' key= {descripcion.title+ index}>
                {descripcion.title}
                <span className='Description__year' >{descripcion.year}</span>
                
                </article>
             )




        })}




    </div>
)

    
}
export default Descripcion 


