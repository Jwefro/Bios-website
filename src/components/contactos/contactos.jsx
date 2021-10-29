import './contactos.css'
import React, {useState} from 'react'
import Footer from '../footer/footer';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faEnvelope, faPhone,faUser} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Button, Modal} from "react-bootstrap";
import WOW from 'wowjs';

function Contactos() {
    new WOW.WOW().init();
    const [ message, setMessage ] = useState('')
    const [ messageCi, setMessageCi ] = useState('')
    const [ orden, setOrden ] = useState({})
    const [ ordenCi, setOrdenCi ] = useState([])
    const [show, setShow] = useState(false);
    const [showCi, setShowCi] = useState(false);
    const handleShow = () => setShow(true)
    const handleClose = () => {
        setShow(false);
        setShowCi(false);
    }
    const handleShowCi = () => setShowCi(true)
    const formatDate = (date) => {
        console.log(date)
        date = new Intl.DateTimeFormat("es-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit"
        }).format(new Date(date))
        return date
    }
    const searchId = (e, byClick = false) => {
        if (e?.code === "Enter" || e?.code === "NumpadEnter" || byClick) {
            axios.get(`http://localhost:3001/orden/id-order/${e.target.value}`)
                .then(({data}) => {
                    console.log(data)
                    if(data) {
                        setOrden(data)
                        handleShow()
                        setShowCi(false);
                    }
                    else {
                        setMessage('No encontrado')
                        handleClose()
                        setTimeout(() => setMessage(''), 5000)
                    }
                })
                .catch(() => {
                    setMessage('No encontrado')
                    handleClose()
                    setTimeout(() => setMessage(''), 5000)
                })
        }
    }
    const searchCi = (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            axios.get(`http://localhost:3001/orden/ci/${e.target.value}`)
                .then(({data}) => {
                    if(data) {
                        setOrdenCi(data)
                        handleShowCi()
                        setShow(false);
                    }
                    else {
                        setMessageCi('No encontrado')
                        handleClose()
                        setTimeout(() => setMessageCi(''), 5000)
                    }
                })
                .catch(() => {
                    setMessageCi('No encontrado')
                    handleClose()
                    setTimeout(() => setMessageCi(''), 5000)
                })
        }
    }
    return (
        <div>

            <div className="fondoContacto">
                <div className="conta">
                    <h1>Contactanos</h1>
                    <a target="_blank"
                       href="https://wa.me/584126405345?text=Hola,%20me%20gustaria%20contactarte%20estoy%20interesado%20en%20tu%20trabajo">
                        <FontAwesomeIcon icon={faWhatsapp} className="cursor-pointer animate__animated animate__heartBeat"  date-wow-offset="80" data-wow-interation="5" />
                    </a>
                    <a target="_blank"
                       href="https://instagram.com/bios.sc?utm_medium=copy_link">
                        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer animate__animated animate__heartBeat"  date-wow-offset="80" data-wow-interation="5" />
                    </a>
                    <a target="_blank"
                       href="mailto:arturoluna879@gmail.com?Subject=Hola,%20me%20gustaria%20contactarte%20estoy%20interesado%20en%20tus%20servicios">
                        <FontAwesomeIcon icon={faEnvelope} className="cursor-pointer animate__animated animate__heartBeat"  date-wow-offset="80" data-wow-interation="5" />
                    </a>
                </div>
            </div>
            <div className="separador">
                <p> Nuestro trato, rapidez, experiencia y el desarrollo de soluciones personalizadas. Nuestros clientes siempre son prioridad </p>
            </div>

            <div className="container">

                <h1 className="aten">Atencion al Cliente</h1>

                <div className="infoContacto ">
                    <div className="infoContactar wow animate__animated animate__rotateInDownLeft" data-wow-delay="1s" date-wow-offset="80" data-wow-interation="1">

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
                        <h4 className="info">+58 414-1234564</h4>
                         <hr/>
                    </div>



                    </div>
                    <div className="ordenes wow animate__animated animate__rotateInDownRight" data-wow-delay=".5s" data-wow-interation="1">

                        <p className="mt-5">Ingresa tu numero de orden para ver el Status en la que se encuentra tu equipo:</p>

                        <input type="text" onKeyPress={searchId} className="form-control mb-4" placeholder="665657"/>
                        {
                            message.length ? (<div className="alert alert-danger">{message}</div>) : ''
                        }
                        <hr/>

                        <p>Si olvidaste tu numero de orden ingresa tu CI y te mostraemos tus ordenes registradas</p>
                        <input type="text" onKeyPress={searchCi} className="form-control" placeholder="   Ingresa tu Ci Ejemplo: 27987564"/>
                        {
                            messageCi.length ? (<div className="mt-3 alert alert-danger">{messageCi}</div>) : ''
                        }
                    </div>

                </div>
            </div>

            <h1 id="consulta" className="aten mb-5">¿Tienes Alguna consulta?</h1>
 <div  className="contac shadow ">


                <div className="imgCon wow animate__animated animate__fadeInLeft" data-wow-interation="1">
                    <div className="foncolsulta"><FontAwesomeIcon icon={faAddressBook} className="fontconsulta" />
                <h4>INFORMACION DE CONTACTO</h4></div>


                </div>

                <div className="form wow animate__animated animate__fadeInRight">
                    <div className="row">
                        <div className="row">
                        <div className="col-6">
                            <div className="box">
                                <label htmlFor=""><FontAwesomeIcon icon={faUser}/></label>
                            <input type="text" className="boxx" placeholder={'Nombre completo'} />

                            </div>
                            
                        </div>
                        <div className="col-6">
                            <div className="box">
                                <label htmlFor="" ><FontAwesomeIcon icon={faPhone}/></label>
                            <input type="text" className="boxx" placeholder="914-123-456" /></div>
                            
                        </div>
                      </div>
                    <label htmlFor="">Direccion</label>
                    <input type="text" placeholder="Escribe aqui tu direccion" />
                    <label htmlFor="">Correo Electronico</label>
                    <input type="email" placeholder="Example@gmail.com" />

                    <label htmlFor="" >Consulta</label>
                    <input type="text" className="consulta" placeholder="Escribe aqui tu consulta" />

                    </div>
                </div>
            </div>
           <Footer />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {orden?.device?.label?.make} - {orden?.device?.label?.model} - <b>{orden?.idOrden}</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={'px-2'}>
                        <h5 className={'pb-3'}>Historico de {orden?.typeDevice?.name}</h5>
                        {
                            orden?.historic?.map((item, index) => {
                                return (
                                    <div className={`my-2 alert d-flex justify-content-between
                                        ${item?.status === 'wait' ? 'alert-secondary' : ''}
                                        ${item?.status === 'process' ? 'alert-primary' : ''}
                                        ${item?.status === 'completed' ? 'alert-success' : ''}
                                        ${item?.status === 'delivered' ? 'alert-info' : ''}
                                        ${item?.status === 'cancelado' ? 'alert-danger' : ''}
                                        `} key={index}>
                                        <span>{item?.status}</span>
                                        <span>{formatDate(item?.date)}</span>
                                    </div>
                                )
                            })
                        }
                        <div className={'mt-2 border rounded p-3'}>
                            {orden?.description}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showCi} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Servicios
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {
                            ordenCi?.map((item, index) => {
                                return (
                                    <div onClick={() => searchId({target: {value: item?.idOrden}}, true)}
                                        className={`my-2 cursor-pointer alert d-flex align-items-center justify-content-between
                                        ${item?.status === 'wait' ? 'alert-secondary' : ''}
                                        ${item?.status === 'process' ? 'alert-primary' : ''}
                                        ${item?.status === 'completed' ? 'alert-success' : ''}
                                        ${item?.status === 'delivered' ? 'alert-info' : ''}
                                        ${item?.status === 'cancelado' ? 'alert-danger' : ''}
                                        `} key={index}>
                                        <div>
                                            <p className={'p-0 m-0'}>#{item?.idOrden}</p>
                                            <small>
                                                {item?.device?.label?.make} -
                                                {item?.device?.label?.model}
                                            </small>
                                        </div>
                                        <div className={'text-end'}>
                                            <p className={'p-0 m-0'}><small>{formatDate(item?.createdAt)}</small></p>
                                            <small className={'mt-1'}>{item?.status}</small>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Contactos
