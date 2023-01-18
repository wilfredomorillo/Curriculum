import React from "react";
import Screenshot_5 from '../../assent/Screenshot_5.png'
import { Basedata } from "../../BaseData/Basedata";
import'./Home.scss'

const {name, contacto, email , ocupacion}=Basedata.home

function Home (){

return(
 <section className="Home">
<div className="Home__info">
    <h1>{name}</h1>
    <h2 className="Home__title">{ocupacion}</h2>
<ul>
    <li>
        <span className="Home__icon">📱🙋🏻‍♂️</span>
        <a href={`Tlf: ${contacto}`} className ='Home__link'>{contacto}</a>
    </li>
    <li>
        <span className="Home_icon">📧</span>
        <a href={`Mail: ${email}`}classname='Home__link'>{email}</a>
    </li>
</ul>
</div>

<div className = 'Home__imag'>

    <img src={Screenshot_5} alt='Screenshot_5' />
</div>

 </section>





)   



}

export default Home
