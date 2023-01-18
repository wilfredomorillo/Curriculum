import React from "react";

import {Link} from 'react-router-dom'


function Landingpage(){
return(
    <div className="landing" >
        <Link to = '/home'><button className="Boton">Curriculum</button></Link>
    </div>
)

}


export default Landingpage