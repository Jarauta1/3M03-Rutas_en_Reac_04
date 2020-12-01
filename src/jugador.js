
function Jugador (props) {

    return (<>
    <h1>{props.nombre}</h1>
    <img src={props.imagen} width="50"/>
    <p>Edad: {props.edad} años</p>
    <p>Altura: {props.altura} m</p>
    <p>Peso: {props.peso} kg</p>
    <p>Dorsal: {props.numero}</p>
    <p>Posicion: {props.posicion}</p>
    <p>País origen: {props.pais}</p>
    </>)

}

export default Jugador;