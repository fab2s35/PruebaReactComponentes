import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton';
import Badge from './components/Badge';
import Header from './components/Header';
import Enlace from './components/Enlace';
import Breadcrumbs from './components/Breadcrumbs';


function App() {
  return (
  
    <div>

    <br></br>
    <Boton/>
    <br></br>
    <Badge/>
    <br></br>
    <Header/>
    <br></br>
    <Enlace/>
    <br></br>
    <Breadcrumbs/>
    <br></br>

    </div>

  );
}

export default App
