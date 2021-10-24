import React from 'react'
import "./home.css";
import "animate.css";
import servicio1 from "../../assets/imagenes/servicio1.jpg";
import productos1 from "../../assets/imagenes/productos1.jpg";
import DS1 from "../../assets/imagenes/DS1.jpg";
import Footer from '../footer/footer';
import Carousel from '../carousel/carousel';
const Home = () => {
    return (
        <div className="">

            <div className="contain">
                
                <div className="con   animate__animated animate__flash">
                    
                    <span className="present1 ">SERVICIOS INFORMATICOS</span>

                </div>
               
             
           
            </div>
           



            
        <div className="separador">

        <p>ESPECIALIZADOS EN SERVICIO TECNICO</p>

        </div>
        <div className="container " >

            <h1>Servicios que te Ofrecemos</h1>
      


        <div className="container1">

            <div className="card">
                <img src={servicio1} alt="" />
                <h4>Servicio Tecnico</h4>
                <p> lista de servicios que la empresa ofrece. para el mantenimiento y reparacion de equipos</p>
            </div>

            <div className="card">
                <img src={productos1} alt="" />
                <h4>Productos</h4>
                <p>Disponemos de una gran variedad de productos al mejor precio: Ordenadores, portátiles, tablets, componentes para PC, impresoras, monitores, periféricos, discos duros…</p>
            </div>

            <div className="card">
                <img src={DS1} alt="" />
                <h4>Desarrollo de Software</h4>
                <p>Nos esforzamos en crear la mejor página web y tienda online para tí.
Estamos especializados en diseño y desarrollo de aplicaciones web.</p>
            </div>
            
        </div>



        </div>
         <Carousel />

         <br />
         <br />
         
        <div className="necesitasPresupuesto shadow mb-5">
                <div className="contenidoPresupuesto">
                    <div className="centrarPresupuesto"><h2>¿Necesitas un presupuesto para tu empresa?</h2>
                    <p>Solicita una consulta y un técnico profesional de Bios Servicios informaticos te ofrecerá la mejor solución para tu problema. ¡Presupuesto sin compromiso!</p>

                    <button type="button" className="btn buttonPresupuesto">Solicita tu presupuesto sin compromiso</button></div>
                    
                </div>
            </div>



   


    <Footer />










        
   
        </div>

        

    )
};

export default Home;
