import Header from "./components/commons/Header";
import Hero from "./components/commons/Hero";
import Aplication from "./components/commons/Aplication";
import React from "react";


//CSS
import './App.css'
import './index.css'
import 'bulma/css/bulma.css'
import './components/commons/Hero.css'
import './components/commons/Header.css'
import './components/commons/Aplication.css'



function App() {
  return (
   <div>
    <Header/>
    <Hero/>
    <Aplication/>
   </div>
  );
}

export default App;
