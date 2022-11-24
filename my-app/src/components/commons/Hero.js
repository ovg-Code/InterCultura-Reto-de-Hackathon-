import React from "react";
import ImageHero from './../../Assets/Hero_Image.png'


const Hero = () =>{
    return(
        <div className="container Hero">
            <p className="Hero_Text">
            Aprende sobre las diferentes culturas en un solo lugar 
            </p>
            <figure className=" Herologo">
                <img src={ImageHero}/>
            </figure>
            <button class="button is-primary is-rounded buttonHero">Empezar</button>
        </div>
    )}
 export default Hero