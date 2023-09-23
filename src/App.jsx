import logo from './logo.svg';
import './App.css';
//import TablaDatos from './TablaDatos';
import {useState} from 'react';

function App() {

  const[nombre, setNombre]= useState();
  const[ApellidoP, setApellidoP]=useState();
  const[ApellidoM, setApellidoM]=useState();
  const[Telefono, setTelefono]=useState();
 


  
  return (
    <div className="App">
     <p>Formulario</p>
     

     <input onChange={(e)=>setNombre(e.target.value)}type='text' placeholder='Nombre' required=""></input>
     <br></br>
     <input onChange={(e)=>setApellidoP(e.target.value)}type='text' placeholder='Apellido Paterno'required=""></input>
     <br></br>
     <input onChange={(e)=>setApellidoM(e.target.value)}type='text' placeholder='Apellido Materno'></input>
     <br></br>
     
     <input onChange={(e)=>setTelefono(e.target.value)}type='number' placeholder='Telefono'></input>
     <br></br>
   
     <br></br>
     <button onClick>Guardar</button>
     <button onClick>Cancelar</button>


    </div>
  );
}

export default App;
