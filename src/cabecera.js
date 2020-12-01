import {Link} from "react-router-dom"
import Equipo from "./equipo"
import {useState} from "react"

function Cabecera () {

    let [equipo,setEquipo] = useState(Equipo)
 
    return (<>
    <h1>Rutas en React</h1>
    <p>Estás en el ejercicio 4</p>
    <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/quinteto">Quinteto</Link></li>
        <li><Link to="/jugador1">{equipo[0].nombre}</Link></li>
        <li><Link to="/jugador2">{equipo[1].nombre}</Link></li>
        <li><Link to="/jugador3">{equipo[2].nombre}</Link></li>
        <li><Link to="/jugador4">{equipo[3].nombre}</Link></li>
        <li><Link to="/jugador5">{equipo[4].nombre}</Link></li>
           
    </ul>
    </>)
}

export default Cabecera;