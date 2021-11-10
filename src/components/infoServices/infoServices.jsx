import { useState } from 'react';
import './infoServices.css'
import { Button,Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop, faLaptop,faTv,faHdd,faKeyboard,faPrint } from '@fortawesome/free-solid-svg-icons';
import services from './services.json';
import "animate.css";
import WOW from 'wowjs'

export default function Example() {
    const [state, setState] = useState({name: '', list: []})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (type) => {
        const data = services.find((a) => a.name === type)
        setState(data)
        setShow(true)
    }
    new WOW.WOW().init();

    return (
        <>
            <div className="row ">
                <div onClick={() => handleShow('CPU')} className="cursor-pointer con_servi shadow col-3 wow animate__animated animate__fadeIn  " data-wow-delay="1s" date-wow-offset="80" data-wow-interation="1">
                    <span className="icon_servi" >
                        <FontAwesomeIcon icon={faDesktop}  />
                    </span>
                    <h5>CPU</h5>
                    <p> Reparación y mantenimiento correctivo y preventivo de software y hardware para computadoras de escritorio.</p>
                </div>
                <div onClick={() => handleShow('Laptop')} className="cursor-pointer con_servi shadow col-3 wow animate__animated animate__fadeIn  " data-wow-delay=".4s" date-wow-offset="80" data-wow-interation="1">
                    <span className="icon_servi">
                        <FontAwesomeIcon icon={faLaptop} />
                    </span>
                    <h5>Laptop</h5>
                    <p>Reparación y mantenimiento correctivo y preventivo de software y hardware para equipos portatiles.</p>
                </div>
                <div onClick={() => handleShow('Monitor')} className="cursor-pointer con_servi shadow col-3 wow animate__animated animate__fadeIn  " data-wow-delay="0.5s" date-wow-offset="80" data-wow-interation="1">
                    <span className="icon_servi">
                        <FontAwesomeIcon icon={faTv} />
                    </span>
                    <h5>Monitor</h5>
                    <p>Reparación y mantenimiento correctivo y preventivo de hardware para monitores</p>
                </div>
                <div onClick={() => handleShow('Impresoras')} className="cursor-pointer con_servi shadow col-3 wow animate__animated animate__fadeIn  " data-wow-delay=".7s" date-wow-offset="80" data-wow-interation="1">
                    <span className="icon_servi">
                        <FontAwesomeIcon icon={faPrint} />
                    </span>
                    <h5>Impresoras</h5>
                    <p>Reparación y mantenimiento correctivo y preventivo de software y hardware para impresoras.</p>
                </div>
                <div onClick={() => handleShow('Modem/Router')} className="cursor-pointer con_servi shadow col-3 wow animate__animated animate__fadeIn  " data-wow-delay=".3s" date-wow-offset="80" data-wow-interation="1">
                    <span className="icon_servi">
                        <FontAwesomeIcon icon={faHdd} />
                    </span>
                    <h5>Modem/Router</h5>
                    <p>Reparación y mantenimiento correctivo y preventivo de software y hardware Para modem/Router.</p>
                </div>
                <div onClick={() => handleShow('Accesorios')} className="cursor-pointer con_servi shadow col-3 wow animate__animated animate__fadeIn  " data-wow-delay="1s" date-wow-offset="80" data-wow-interation="1">
                    <span className="icon_servi">
                        <FontAwesomeIcon icon={faKeyboard} />
                    </span>
                    <h5>Accesorios</h5>
                    <p>Reparación y mantenimiento correctivo y preventivo de software y hardware para los diferentes accesorios para tu Pc.</p>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{state.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={'listServices'}>
                        {
                            state.list.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item}
                                        {
                                            index !== (state.list.length - 1) ? <hr/> : ''
                                        }
                                    </div>
                                )

                            })
                        }
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
