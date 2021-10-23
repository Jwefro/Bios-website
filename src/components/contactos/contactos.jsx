import './contactos.css'
import React from 'react'
import Footer from '../footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
function Contactos() {
    return (
        <div>

            <div className="fondoContacto">
                <div className="conta">
                    <h1>Contactanos</h1>
                    <a target="_blank"
                       href="https://wa.me/584126405345?text=Hola,%20me%20gustaria%20contactarte%20estoy%20interesado%20en%20tu%20trabajo">
                        <FontAwesomeIcon icon={faWhatsapp} className="cursor-pointer" />
                    </a>
                    <a target="_blank"
                       href="https://instagram.com/bios.sc?utm_medium=copy_link">
                        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer" />
                    </a>
                    <a target="_blank"
                       href="mailto:arturoluna879@gmail.com?Subject=Hola,%20me%20gustaria%20contactarte%20estoy%20interesado%20en%20tus%20servicios">
                        <FontAwesomeIcon icon={faEnvelope} className="cursor-pointer" />
                    </a>
                </div>


            </div>
            <div className="separador">
                <p> Nuestro trato, rapidez, experiencia y el desarrollo de soluciones personalizadas. Nuestros clientes siempre son prioridad </p>
            </div>

            <div className="container">

                <h1 className="aten">Atencion al Cliente</h1>

                <div className="infoContacto">
                    <div className="infoContactar">

                    <p> Puedes contactar con nosotros mediante el Email o el Telefono, y te daremos una respuesta lo antes posible:</p>

                    <div className="row">
                        <div className="col-1"><FontAwesomeIcon icon={faEnvelope} className="font" /></div>
                        <div className="col-3"> <span>  Email</span>


                         </div>   <h4 className="info">info@misitio.com</h4>
                         <hr/>
                    </div>
                    <div className="row">
                        <div className="col-1"><FontAwesomeIcon icon={faPhone} className="font" /></div>
                        <div className="col-3"> <span> Telefono</span> </div>
                        <h4 className="info">914-123456</h4>
                         <hr/>
                    </div>



                    </div>
                    <div className="ordenes">

                        <p className="mt-5">Ingresa tu numero de orden para ver el Status en la que se encuentra tu equipo:</p>

                        <input type="text" className="mb-4" placeholder="   Numero de Orden Ejemplo: 567"/>
                        <hr/>

                        <p>Si olvidaste tu numero de orden ingresa tu CI y te mostraemos tus ordenes registradas</p>
                        <input type="text" className="mb-4" placeholder="   Ingresa tu Ci Ejemplo: 27987564"/>
                    </div>

                </div>


            </div>

            <h1 className="aten mb-5">¿Tienes Alguna consulta?</h1>
 <div className="contac shadow ">


                <div className="imgCon">
                    <div className="foncolsulta"><FontAwesomeIcon icon={faAddressBook} className="fontconsulta" />
                <h4>INFORMACION DE CONTACTO</h4></div>


                </div>

                <div className="form">
                    <div className="row">
                        <div className="row">
                        <div className="col-6">
                            <label htmlFor="">Nombre</label>
                            <input type="text" placeholder=" Nombre completo" />

                        </div>
                        <div className="col-6">
                            <label htmlFor="" >Telefono</label>
                            <input type="text" placeholder=" 914-123-456" />
                        </div>
                      </div>
                    <label htmlFor="">Direccion</label>
                    <input type="text" placeholder="Escribe aqui tu direccion" />
                    <label htmlFor="">Correo Electronico</label>
                    <input type="email"placeholder="Example@gmail.com" />

                    <label htmlFor="" >Consulta</label>
                    <input type="text" className="consulta" placeholder="Escribe aqui tu consulta" />

                    </div>
                </div>
            </div>
           <Footer />
        </div>
    )
}

export default Contactos
