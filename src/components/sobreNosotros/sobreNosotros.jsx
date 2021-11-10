import React from 'react'
import './sobreNosotros.css';
import consejo  from '../../assets/imagenes/consejo.jpg';
import click  from '../../assets/imagenes/click.png';
import Footer from '../footer/footer';
import "animate.css";
import WOW from 'wowjs';

function sobreNosotros() {


    new WOW.WOW().init();
    return (
        <div>
            <div className="fondo">
        <div className="fondoSN">
            <h1 className="wow animate__animated animate__heartBeat" data-wow-delay="2s" data-wow-interation="5">Sobre Nosotros</h1>
        </div>
<div className="separador">
    <p>
    Nuestro trato, rapidez, experiencia y el desarrollo de soluciones personalizadas. Nuestros clientes siempre son prioridad
    </p>
</div>

<div className="mision wow animate__animated  animate__bounceInLeft" data-wow-delay="2s" data-wow-interation="5">
    <div className="imgMision"></div>
    <div className="textMision shadow">
        <h1>Misión</h1>
        <p>
        Brindar un Servicio Técnico fundamentado en capacidad tecnológica y en la confianza que nuestros clientes depositan en nosotros, solucionando eficientemente situaciones que requieren experiencia, habilidad y eficacia para maximizar el desempeño de los equipos de computación; ya sea en hogares y empresas públicas o privadas.
        </p>
    </div>
    <div className="imgMision2"></div>
</div>

<div className="mision wow animate__animated  animate__bounceInRight" data-wow-delay="2s" data-wow-interation="5">
    <div className="textVision shadow">
        <h1>Visión</h1>
        <p>
        Constituimos como un servicio eficiente preocupado por satisfacer las necesidades de nuestros clientes, basados en una mejora continua para cambiar aún más la precepción de la empresa induciendo a la preferencia del público al momento la atención al cliente y del servicio. Nuestros valores son cualidades que nos representan y nos orientan.        </p>
    </div>
    <div className="imgVision"></div>
    
</div>
 <br />
 <br />
 <h1>Nuestros clientes</h1>
 <br />
 <div className="nuestroClientes">
 <img src={consejo} className="imgClientes wow animate__animated animate__heartBeat" data-wow-delay="1s" data-wow-interation="5" alt="" />
 <img src={click} className="imgClientes1 wow animate__animated animate__heartBeat" data-wow-delay="1s" data-wow-interation="5" alt="" />
<br />
<br />
 </div>

           </div>

           <Footer/>
        </div>
    )
}

export default sobreNosotros
