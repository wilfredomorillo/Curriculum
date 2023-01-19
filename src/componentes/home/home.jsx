import React from "react";
import Screenshot_5 from '../../assent/Screenshot_5.png'
import { Basedata } from "../../BaseData/Basedata";
import'./Home.scss'
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const {name, contacto, email , ocupacion}=Basedata.home

function Home (){

return(
     <div className="img">
    <div className="conten">
    <div >
        <nav>
        <Navbar/>
        </nav>
     <div className="Home">
       
<div className="Home__info">
    <h1>{name}</h1>
    <h2 className="Home__title">{ocupacion}</h2>
<ul>
   <div>
        <span className="Home__icon">📱🙋🏻‍♂️</span>
        <a href={`Tlf: ${contacto}`} className ='Home__link'>{contacto}</a>
    </div>
    <div>
        <span className="Home_icon">📧</span>
        <a href={`Mail: ${email}`}classname='Home__link'>{email}</a>
    </div>
</ul>
</div>

<div className = 'Home__imag'>

    <img src={Screenshot_5} alt='Screenshot_5' />


    <div>
        <Link to ='/experiencia'><button className="Curriculo__button"><h2>Experiencia</h2></button></Link>
        <Link to ='/educacion'><button className="Curriculo__button"><h2>Education</h2></button></Link>
    </div>
</div>
</div>
 </div>

</div>


</div>

)   



}

export default Home
