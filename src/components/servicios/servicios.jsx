import React from 'react';
import "./servicios.css";
import servicio_tecnico from "../../assets/imagenes/servicio_tecnico.jpg"
import "animate.css"
import  Example  from '../../hooks/modal';
import Footer from '../footer/footer';



 const Servicios = () => {

    return (
        <div className="" >

            <div className="portada">
                <div className="row row">
                    <div className="portada_text col-5 animate__animated animate__fadeInLeft ">
                        <p className="p3">¿Necesitas Soporte Tecnico?</p>
                        <p className="p4"> Te ofrecemos un excelente servicio en recuperacion de datos, instalacion de programas, Mantenimiento preventivo y correctivo de Software y Hardware</p>
                    </div>
                    <div className="portada_img col-5 animate__animated animate__fadeInRight ">
                        <img src={servicio_tecnico} alt="" />
                    </div>
                </div>

            </div>

             <div className="separador">
                    <p> Nuestro trato, rapidez, experiencia y el desarrollo de soluciones personalizadas. Nuestros clientes siempre son prioridad </p>
                 </div>       

                    <h1 className="servi_ofre animate__animated animate__fadeInLeft">Servicios que te Ofrecemos</h1>

                <Example />
            
               <Footer />






















               
        </div>
    )
}

export default Servicios; 