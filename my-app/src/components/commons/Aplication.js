import React from "react";
import education from '../../Assets/Education.png'
import tourism from '../../Assets/tourism.png'
const Aplication = () =>{
    return(
        <div className="container is-fullhd" >
            <h2 className="title-Aplication">Areas de aplicacion</h2>
            <div className="education">
                <  div className="education-image">
                    
                    <h3>Educación</h3>
                   
                    <figure>
                    <img src={education}/>
                    </figure>
                    
                </div>
                <p>Los juegos sientan las bases para el desarrollo de conocimientos y competencias 
                   sociales y emocionales clave. A través del juego, los niños aprenden a forjar vínculos 
                   con los demás, y a compartir, negociar y resolver conflictos, además de contribuir a su 
                   capacidad de autoafirmación.
                </p>
            </div>
            <div className="tourism">
            <h3>Turismo</h3>    
                <figure>
                    
                    <img src={tourism}/>
                </figure>
                <p>Los tours 360° permiten crear una fuerte presencia en internet y, debido a que los servicios
                   hoteleros y turísticos son principalmente adquiridos a través de medios digitales, es una 
                   excelente forma de mantener una buena imagen en estos medios.

                </p>
            </div>
        </div>
    )
}

export default Aplication