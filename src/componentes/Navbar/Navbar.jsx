import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'

function Navbar(){
return(
    <div className="Nav">
        <div className="LogoyNombre">
<Link to ='/'> 
<img src="https://w7.pngwing.com/pngs/1013/1010/png-transparent-web-development-computer-programming-logo-others-angle-web-design-text.png"
 alt="Logo-programacion" 
 className="Nav__logo"/>
</Link>
<Link to ='/home'> <button>home</button>
</Link>
<span className="Nav__logo"></span>
</div>
<div className="social__logo"> 
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
)



}


export default Navbar