import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import {useState} from "react"
import Equipo from "./equipo"
import Cabecera from "./cabecera"
import Footer from "./footer"
import Quinteto from "./quinteto"
import Jugador from "./jugador"


function App() {

  let [equipo,setPeliculas] = useState(Equipo)
 

  return(<BrowserRouter>
  <Cabecera/>
    <Route exact path="/"></Route>
    <Route exact path="/quinteto">
  <Quinteto/>
  </Route>
  <Route exact path="/Jugador1">
  <Jugador nombre={Equipo[0].nombre} altura={equipo[0].altura} peso={equipo[0].peso} edad={equipo[0].edad} pais={equipo[0].pais} numero={equipo[0].numero} posicion={equipo[0].posicion} imagen={equipo[0].imagen}/>
  </Route>
  <Route exact path="/Jugador2">
  <Jugador nombre={Equipo[1].nombre} altura={equipo[1].altura} peso={equipo[1].peso} edad={equipo[1].edad} pais={equipo[1].pais} numero={equipo[1].numero} posicion={equipo[1].posicion} imagen={equipo[1].imagen}/>
  </Route>
  <Route exact path="/Jugador3">
  <Jugador nombre={Equipo[2].nombre} altura={equipo[2].altura} peso={equipo[2].peso} edad={equipo[2].edad} pais={equipo[2].pais} numero={equipo[2].numero} posicion={equipo[2].posicion} imagen={equipo[2].imagen}/>
  </Route>
  <Route exact path="/Jugador4">
  <Jugador nombre={Equipo[3].nombre} altura={equipo[3].altura} peso={equipo[3].peso} edad={equipo[3].edad} pais={equipo[3].pais} numero={equipo[3].numero} posicion={equipo[3].posicion} imagen={equipo[3].imagen}/>
  </Route>
  <Route exact path="/Jugador5">
  <Jugador nombre={Equipo[4].nombre} altura={equipo[4].altura} peso={equipo[4].peso} edad={equipo[4].edad} pais={equipo[4].pais} numero={equipo[4].numero} posicion={equipo[4].posicion} imagen={equipo[4].imagen}/>
  </Route>
  <Footer/>
  </BrowserRouter>)
}

export default App;

