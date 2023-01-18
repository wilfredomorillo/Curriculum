import React from "react";
import { useState } from "react";
import './curriculo.scss'
import Descripcion from "./descripciones";


function Curriculo({curriculo}) {
const{ experiencia, education}= curriculo
const [showExperiencia , setShowExperiencia]= useState(false)
return(

    <section className="Curriculo">
        <nav>
        <div className="centro">
    
            <button className="Curriculo__button"  onClick={()=>setShowExperiencia(false)}><h2>Education</h2></button>
            <button className="Curriculo__button" onClick={()=>setShowExperiencia(true)}><h2>Experience</h2></button>
        </div>
        </nav>
        {showExperiencia
        ? <Descripcion descripcion={experiencia}/>
        :<Descripcion descripcion={education}/>}

    </section>
)

    
}
export default Curriculo