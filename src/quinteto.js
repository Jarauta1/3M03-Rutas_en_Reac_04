import Equipo from "./equipo"
import {useState} from "react"

function Quinteto () {

    
  let [equipo,setEquipo] = useState(Equipo)

  let mostrarEquipo = equipo.map(jugador=>{
      return (<>
      <h3>{jugador.nombre}</h3>
      <img src={jugador.imagen} width="50"/>
      </>)
  })

  return (<>{mostrarEquipo}</>)
}

export default Quinteto;