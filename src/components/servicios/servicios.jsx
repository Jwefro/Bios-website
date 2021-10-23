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

                    <h1 className="contenidoWebH2 servi_ofre animate__animated animate__fadeInLeft">Servicio Tecnico </h1>
                        <h5>Puedes ver la lista de servicio tecnico que te ofrecemos por cada equipo clickeando en su nombre respectivo</h5>
            

                <Example />
            
<br />
<br />
  
              <h2 className="contenidoWebH2">Desarrollo de páginas web y tiendas online </h2>

        <div className="container mb-5 mt-5"> 
            <p>            En <b>Bios servicios informaticos</b> disponemos de un Departamento especializado en el <b>desarrollo de páginas web</b>y <b>tiendas online de comercio electrónico</b> . Somos una empresa de informática que ofrece el desarrollo y diseño web, el diseño de tiendas online, re-diseño con adaptación a móviles, tablets y el diseño de páginas web cubriendo todas tus necesidades profesionales, institucionales y/o personales. 
<br />
<br />
Cubrimos todas las necesidades de su empresa en diseño web, encargándonos de todo el proceso. No es suficiente con diseñar páginas webs atractivas, hay que diseñar páginas webs rápidas, eficientes e intuitivas. Un servicio que se recomienda trabajar para mejorar la imagen de empresa y conseguir nuevos clientes es la gestión de las redes sociales.
</p>
        </div>


              <div className="contenidoWeb">         
              
                
                  <div className="row">
                  <div className="col-6">
                      <h5>Diseño de Páginas Web</h5>
                      <p>El proceso de diseño de tu página web se estructura en las siguientes fases:</p>
                      <ul>
                          
                          <li><p>Estudio y análisis de su negocio y objetivos, así como el de la competencia, para así poder definir la estrategia online que tu empresa necesita.</p></li>
                          <li><p>Definir el mensaje que se desea comunicar para implementar los elementos comunicativos necesarios en el diseño web y la generación de contenidos para tu web, siempre manteniendo la imagen corporativa.</p></li>
                          <li><p>Realizar el diseño web y la programación de la página web.</p></li>
                          <li><p>Una vez realizado el diseño web, programación y publicación de la página web, nuestro equipo de marketing online y social media, se encarga del mantenimiento y posicionamiento de la web en los principales buscadores como Google y en hacer que tu web sea visible para sus potenciales clientes.</p></li>
                      </ul>
                  </div>
                  <div className="col-6">
                      <h5>Diseño de Tiendas Online</h5>
                      <p>Los proyectos de comercio electrónico que acometemos abarcan los siguientes aspectos:</p>
                      <ul>
                          
                          <li><p>Diseño web responsivo: optimizado para todos los dispositivos.</p></li>
                          <li><p>Múltiples formas de pago y envío: Tarjeta de Crédito (TPV), PayPal, contra reembolso…</p></li>
                          <li><p>Buscadores a medida: pensados para facilitar a tus clientes encontrar rápidamente lo que buscan.</p></li>
                          <li><p>Categorización con número de productos o servicios ilimitados: para que puedas poner a disposición de tus clientes todo tu catálogo online o aquellos que quieras destacar.</p></li>
                          <li><p>Carrito optimizado para la venta: diseño orientado a flujos de venta rápida.</p></li>
                          <li><p>Promociones y descuentos.</p></li>
                          <li><p>Diseño profesional hecho a tu medida y pensado para OPTIMIZAR EL POSICIONAMIENTO WEB.</p></li>
                          <li><p>Desarrollo flexible y escalable en el tiempo.</p></li>
                      </ul>
                  </div>
              </div>
              </div>
              

            <div className="necesitasPresupuesto shadow">
                <div className="contenidoPresupuesto">
                    <div className="centrarPresupuesto"><h2>¿Necesitas un presupuesto para tu empresa?</h2>
                    <p>Solicita una consulta y un técnico profesional de Bios Servicios informaticos te ofrecerá la mejor solución para tu problema. ¡Presupuesto sin compromiso!</p>

                    <button type="button" className="btn buttonPresupuesto">Solicita tu presupuesto sin compromiso</button></div>
                    
                </div>
            </div>


<br />
<br />
               <Footer />






















               
        </div>
    )
}

export default Servicios; 