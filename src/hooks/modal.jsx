import { useState } from 'react';
import { Button,Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop, faLaptop,faTv,faHdd,faKeyboard,faPrint } from '@fortawesome/free-solid-svg-icons';

export default function Example(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
<div className="row ">
                        <div type="button" onClick={handleShow}   className="con_servi shadow col-3"> <span className="icon_servi" ><FontAwesomeIcon icon={faDesktop}  /></span><h5>CPU</h5> <p> Reparacion y mantenimiento correctivo y preventido de software y hardware Para Computadoras de escritorio</p> </div>
                        <div className="con_servi shadow col-3"> <span className="icon_servi"><FontAwesomeIcon icon={faLaptop} /></span> <h5>Laptop</h5></div>
                        <div className="con_servi shadow col-3"> <span className="icon_servi"><FontAwesomeIcon icon={faTv} /></span>  <h5>Monitor</h5></div>
                        <div className="con_servi shadow col-3"> <span className="icon_servi"><FontAwesomeIcon icon={faPrint} /></span> <h5>Impresoras</h5></div>
                        <div className="con_servi shadow col-3"> <span className="icon_servi"><FontAwesomeIcon icon={faHdd} /></span> <h5>Modem/Router</h5></div>
                        <div className="con_servi shadow col-3"> <span className="icon_servi"><FontAwesomeIcon icon={faKeyboard} /> </span><h5>Accesorios</h5></div>
</div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>mamelo eliana 7u7</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
   