import './Inicio.scss'
import React from 'react'
import Screenshot_5 from '../../assent/Screenshot_5.png'



function Hero({hero}) {
return(
 <section className='Hero'>
<div className='Hero__info'>
<h1>{hero.name}</h1>
<h2 className='Hero__title'> {hero.ocupacion}</h2>
<ul>
<li>
<span className='Hero__icon'>📱</span>
<a href={`Tlf : ${hero.contacto}`}className= 'Hero__link'>{hero.contacto}</a>
</li>
<li>
    <span className='Hero__icon'>✉</span>
    <a href={`mail: ${hero.mail}`}className= 'Hero__link'>{hero.email}</a>
</li>
</ul>
</div>
<dir className = 'Hero__imag'>

    <img src={Screenshot_5} alt='Screenshot_5' />
</dir>


 </section>
    )
    
}
 export default Hero