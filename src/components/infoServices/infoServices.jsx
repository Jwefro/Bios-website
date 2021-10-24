import { useState } from 'react';
import './infoServices.css'
import { Button,Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop, faLaptop,faTv,faHdd,faKeyboard,faPrint } from '@fortawesome/free-solid-svg-icons';
import services from './services.json';
import "animate.css";
import WOW from "wowjs"

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
                <div onClick={() => handleShow('CPU')} className="con_servi shadow col-3 wow animate__animated animate__fadeIn " data-wow-delay=".5s" data-wow-interation="1">
                    <span className="icon_servi" >
                        <FontAwesomeIcon icon={faDesktop}  />
                    </span>
                    <h5>CPU</h5>
                    <p> Reparacion y mantenimiento correctivo y preventido de software y hardware Para Computadoras de escritorio</p>
                </div>
                <div onClick={() => handleShow('Laptop')} className="con_servi shadow col-3 wow animate__animated animate__fadeIn " data-wow-delay=".3s" data-wow-interation="1">
                    <span className="icon_servi">
                        <FontAwesomeIcon icon={faLaptop} />
                    </span>
                    <h5>Laptop</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, voluptatibus!</p>
                </div>
                <div onClick={() => handleShow('Monitor')} className="con_servi shadow col-3 wow animate__animated animate__fadeIn " data-wow-delay=".2s" data-wow-interation="1">
                    <span className="icon_servi">
                        <FontAwesomeIcon icon={faTv} />
                    </span>
                    <h5>Monitor</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloremque fugiat id non quis sed?</p>
                </div>
                <div onClick={() => handleShow('Impresoras')} className="con_servi shadow col-3 wow animate__animated animate__fadeIn " data-wow-delay=".7s" data-wow-interation="1">
                    <span className="icon_servi">
                        <FontAwesomeIcon icon={faPrint} />
                    </span>
                    <h5>Impresoras</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, repellat, sint. Dolorem odit qui tenetur.</p>
                </div>
                <div onClick={() => handleShow('Modem/Router')} className="con_servi shadow col-3 wow animate__animated animate__fadeIn " data-wow-delay=".2s" data-wow-interation="1">
                    <span className="icon_servi">
                        <FontAwesomeIcon icon={faHdd} />
                    </span>
                    <h5>Modem/Router</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti est facilis incidunt sequi! Perspiciatis!</p>
                </div>
                <div onClick={() => handleShow('Accesorios')} className="con_servi shadow col-3 wow animate__animated animate__fadeIn " data-wow-delay=".1s" data-wow-interation="1">
                    <span className="icon_servi">
                        <FontAwesomeIcon icon={faKeyboard} />
                    </span>
                    <h5>Accesorios</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto in reprehenderit vero! Ipsam, officia, placeat.</p>
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
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
