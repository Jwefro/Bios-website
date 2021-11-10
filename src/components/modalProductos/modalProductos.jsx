import React from 'react'
import { useState } from 'react';
import { Button,Modal, ModalFooter } from 'react-bootstrap';
import '../productos/productos.css'
import TD8816  from '../../assets/imagenes/TD8816.png';
import TDW8961N  from '../../assets/imagenes/TDW8961N.png';
import TLWR841N  from '../../assets/imagenes/TLWR841N.png';
import L220_ES  from '../../assets/imagenes/L220_ES.png';
import L365_ES  from '../../assets/imagenes/L365_ES.png';
import L565_ES  from '../../assets/imagenes/L565_ES.png';

class modalProductos extends React.Component {
    constructor(){
        super()
        this.state={
            showModal:false,
            showModal1:false,
            showModal3:false,
            showModal4:false,
            showModal5:false,
            showModal6:false,
        }
       
    }
    handleModal1(){
        this.setState({showModal1: !this.state.showModal1})
    }
    handleModal2(){
        this.setState({showModal: !this.state.showModal})
    }
    handleModal3(){
        this.setState({showModal3: !this.state.showModal3})
    }
    handleModal4(){
        this.setState({showModal4: !this.state.showModal4})
    }
    handleModal5(){
        this.setState({showModal5: !this.state.showModal5})
    }
    handleModal6(){
        this.setState({showModal6: !this.state.showModal6})
    }

    render(){
    
    return (
        <div>
              <div className="contenidoProductos">
        <h3>Router y Modem</h3>
        <div className="container">
         
            <div onClick={()=>this.handleModal1()} className="cardProductos">
                <img src={TD8816} className="imgProduct1" alt="" />
                <div className="td8"><h5>TD-8816</h5>
                <p>ADSL2+ Modem Router</p></div>
                
            </div>
            <div onClick={()=>this.handleModal2()} className="cardProductos">
                <img src={TDW8961N} className="imgProduct" alt="" />
                <h5>TD-W8961N</h5>
                <p>Módem Router Inalámbrico ADSL2+ N 300Mbps</p>
            </div>
            <div onClick={()=>this.handleModal3()} className="cardProductos">
                <img src={TLWR841N} className="imgProduct"  alt="" />
                <h5>TL-WR841N</h5>
                <p>Router inalámbrico N a 300Mbps</p>
            </div>
            
        </div>
        <h3>Multifuncionales</h3>
        <div className="container">
         
            <div  onClick={()=>this.handleModal4()} className="cardProductos">
                <img src={L365_ES} className="imgProduct1" alt="" />
                <div className="td8"><h5>Epson EcoTank L365</h5>
                <p>Impresora Multifuncional</p></div>
                
            </div>
            <div onClick={()=>this.handleModal5()} className="cardProductos">
                <img src={L220_ES} className="imgProduct" alt="" />
                <h5>Epson EcoTank L220</h5>
                <p>Impresora</p>
            </div>
            <div onClick={()=>this.handleModal6()} className="cardProductos">
                <img src={L565_ES} className="imgProduct"  alt="" />
                <h5>Epson EcoTank L565</h5>
                <p>Impresora Multifuncional</p>
            </div>
            
        </div>

        </div>

         <Modal size="lg" show={this.state.showModal1}>
             <Modal.Header>
                 <h5>TD-8816</h5>
             </Modal.Header>
             <Modal.Body>
             <div className="cardProductos2">
                <img src={TD8816} className="imgProduct2" alt="" />
                <div className="td81"><h5>TD-8816</h5>
                <p>ADSL2+ Modem Router</p>
                <p>
                Proporciona acceso a Internet a través del servicio ADSL y crea una red cableada de intercambio, todos con un sólo producto.
Funciona con los últimos estándares ADSL: hasta 24 Mbps de rendimiento superior
el Firewall integrado lo protege contra ataques de Internet.
Diversas políticas de QoS permiten diversas aplicaciones para satisfacer las necesidades de las diferentes personas.
                </p>
                </div>
                </div>
             </Modal.Body>
             <Modal.Footer>
                 <button className="btn btn-dark"  onClick={()=>this.handleModal1()}>Cerrar</button>
             </Modal.Footer>
         </Modal>



         <Modal size="lg" show={this.state.showModal}>
             <Modal.Header>
             <h5>TD-W8961N</h5>
             </Modal.Header>
             <Modal.Body>
             <div className="cardProductos2">
                <img src={TDW8961N} className="imgProduct3" alt="" />
                <div className="td81">
                <h5>Módem Router Inalámbrico ADSL2+ N 300Mbps</h5>
                <p>Dispositivo Todo en Uno: El Módem ADSL2 +, Router NAT, Switch de 4 puertos y punto de acceso inalámbrico N
Velocidad inalámbrica N de hasta 300Mbps lo hace ideal para el ancho de banda de consumo pesada o interrupción de aplicaciones sensibles como los juegos en línea, llamadas por Internet e incluso la transmisión de video de alta definición.
El Asistente de Configuración con soporte multi-idioma ofrece una instalación rápida y sin complicaciones.
Encriptación segura Inalámbrica presionando el botón WPS y fácil acceso a Wi-Fi con el botón de encendido/apagado.   </p>
                </div>
            </div>
             </Modal.Body>
             <Modal.Footer>
                 <button  className="btn btn-dark"  onClick={()=>this.handleModal2()}>Cerrar</button>
             </Modal.Footer>
         </Modal>


         <Modal size="lg" show={this.state.showModal3}>
             <Modal.Header>
             <h5>TL-WR841N</h5>
             </Modal.Header>
             <Modal.Body>
             <div className="cardProductos2">
                <img src={TLWR841N} className="imgProduct3"  alt="" />
                <div className="td81"> <h5>Router inalámbrico N a 300Mbps</h5>
                <p>Velocidad inalámbrica ideal de 300 Mbps para las aplicaciones sensibles como la interrupción de la difusión de videos HD.
Dos antenas aumentan en gran medida la solidez y la estabilidad inalámbrica.
Encriptado fácil de la seguridad inalámbrica sólo presionando el botón QSS.
Control de ancho de banda basado en IP permite a los administradores determinar la cantidad de ancho de banda asignado a cada PC.</p>
                </div>
               
            </div>
             </Modal.Body>
             <Modal.Footer>
                 <button type="button" className="btn btn-dark" onClick={()=>this.handleModal3()}>Cerrar</button>
             </Modal.Footer>
         </Modal>
         <Modal size="lg" show={this.state.showModal4}>
             <Modal.Header>
                 <h5>Epson EcoTank L365</h5>
             </Modal.Header>
             <Modal.Body>
             <div className="cardProductos2">
                <img src={L365_ES} className="imgProduct2" alt="" />
                <div className="td81"><h5>Impresora Multifuncional Epson EcoTank L365</h5>
           
                <p>
                La L365 es la multifuncional inalámbrica que redefine la economía en las familias activas de hoy. Única con EcoTank, el sistema original de Tanque de Tinta de Epson, que incluye 1 botella de tinta negra y 3 botellas a color, para imprimir con calidad 4000 páginas en negro o 6500 páginas a color. Con Wi-Fi, imprime desde smartphones y tabletas - para compartir fácilmente los ahorros en el hogar. Al fin, tienes la libertad de imprimir todo lo que quieras. </p>
                </div>
                </div>
             </Modal.Body>
             <Modal.Footer>
                 <button className="btn btn-dark"  onClick={()=>this.handleModal4()}>Cerrar</button>
             </Modal.Footer>
         </Modal>


         <Modal size="lg" show={this.state.showModal5}>
             <Modal.Header>
                 <h5>Epson EcoTank L220</h5>
             </Modal.Header>
             <Modal.Body>
             <div className="cardProductos2">
                <img src={L220_ES} className="imgProduct2" alt="" />
                <div className="td81"><h5>Impresora Epson EcoTank L220</h5>
           
            
                    <p>
                    La L220 es la multifuncional que revoluciona la economía en los hogares activos de hoy. Única con EcoTank, el sistema original de Tanque de Tinta de Epson, que incluye 1 botella de tinta negra y 3 botellas a color, para imprimir con calidad 4000 páginas en negro o 6500 páginas a color. Imprime cientos de proyectos escolares, páginas Web, fotos, y todo lo que quieras, sin preocuparte por quedarte sin tinta cuando más la necesites. Al fin, tienes la libertad de imprimir todo lo que quieras.

                    </p>
                </div>
                </div>
             </Modal.Body>
             <Modal.Footer>
                 <button className="btn btn-dark"  onClick={()=>this.handleModal5()}>Cerrar</button>
             </Modal.Footer>
         </Modal>


         <Modal size="lg" show={this.state.showModal6}>
             <Modal.Header>
                 <h5>Epson EcoTank L565</h5>
             </Modal.Header>
             <Modal.Body>
             <div className="cardProductos2">
                <img src={L565_ES} className="imgProduct2" alt="" />
                <div className="td81"><h5>Impresora Epson EcoTank L220</h5>
           
            
                    <p>
                    La L565 es la multifuncional completa para tu negocio, ideal para altos volúmenes de impresión con un bajo costo de operación y mayor productividad. Única con EcoTank, el sistema original de Tanque de Tinta de Epson, que incluye 1 botella de tinta negra y 3 botellas a color, para imprimir 4000 páginas en negro o 6500 páginas a color. Con la solución completa en conectividad inalámbrica y red Ethernet, comparte fácilmente los ahorros con todos en la oficina o remotamente. Incluye alimentador automático de documentos de 30 páginas para copiar, escanear y enviar por fax a color. Al fin, tienes la libertad de imprimir todo lo que quieras.
                    </p>
                </div>
                </div>
             </Modal.Body>
             <Modal.Footer>
                 <button className="btn btn-dark"  onClick={()=>this.handleModal6()}>Cerrar</button>
             </Modal.Footer>
         </Modal>


        </div>
        
    )
}
}


export default modalProductos

