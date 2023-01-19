import React from "react";
import {Link} from 'react-router-dom'
import './landing.scss'


function Landingpage(){
return(
   <div  className="landing">
    <div className="continer" id="fild">
        <div className="titulo">
            <h1>Curriculum</h1>
    <div  >
        <Link to = '/home'><button className="Boton">VAMOS!</button></Link>
        <div>
        <a href="https://www.linkedin.com/in/wilfredo-morillo-92752323b/"
target='_blank'>
<img src="https://cdn-icons-png.flaticon.com/512/2111/2111368.png" 
alt="logo_linkedin"
className="social__logo" />
</a>
<a href="https://github.com/wilfredomorillo"
target='_blank'>
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111290.png" 
    alt="logo_github" 
    className="social__logo"/>
</a>
</div>
    </div>
    </div>
    </div>
    </div>
)

}


export default Landingpage