import React from 'react'
import './productos.css'
import Footer from '../footer/footer';
import Carousel from '../carousel/carousel'
import TD8816  from '../../assets/imagenes/TD8816.png';
import TDW8961N  from '../../assets/imagenes/TDW8961N.png';
import TLWR841N  from '../../assets/imagenes/TLWR841N.png';
import L220_ES  from '../../assets/imagenes/L220_ES.png';
import L365_ES  from '../../assets/imagenes/L365_ES.png';
import L565_ES  from '../../assets/imagenes/L565_ES.png';
import sandisk  from '../../assets/imagenes/sandisk.png';
import pngegg  from '../../assets/imagenes/pngegg.png';





function productos() {
    return (
        <div>
           <Carousel/>

        <div className="contenidoProductos">
        <h3>Router y Modem</h3>
        <div className="container">
         
            <div className="cardProductos">
                <img src={TD8816} className="imgProduct1" alt="" />
                <div className="td8"><h5>TD-8816</h5>
                <p>ADSL2+ Modem Router</p></div>
                
            </div>
            <div className="cardProductos">
                <img src={TDW8961N} className="imgProduct" alt="" />
                <h5>TD-W8961N</h5>
                <p>Módem Router Inalámbrico ADSL2+ N 300Mbps</p>
            </div>
            <div className="cardProductos">
                <img src={TLWR841N} className="imgProduct"  alt="" />
                <h5>TL-WR841N</h5>
                <p>Router inalámbrico N a 300Mbps</p>
            </div>
            
        </div>
        <h3>Multifuncionales</h3>
        <div className="container">
         
            <div className="cardProductos">
                <img src={L365_ES} className="imgProduct1" alt="" />
                <div className="td8"><h5>TD-8816</h5>
                <p>ADSL2+ Modem Router</p></div>
                
            </div>
            <div className="cardProductos">
                <img src={L220_ES} className="imgProduct" alt="" />
                <h5>TD-W8961N</h5>
                <p>Módem Router Inalámbrico ADSL2+ N 300Mbps</p>
            </div>
            <div className="cardProductos">
                <img src={L565_ES} className="imgProduct"  alt="" />
                <h5>TL-WR841N</h5>
                <p>Router inalámbrico N a 300Mbps</p>
            </div>
            
        </div>

        </div>
        <div className="contenidoSandisk">
            <div className="imgSandisk">
                <img src={sandisk} className="imgDisk" alt="" />
            </div>
            <div className="sandiskConten">
                <img src={pngegg} className="logoSandisk" alt="" />

                <table class="tabla-datos"> <thead> <tr><th> </th>  </tr></thead> <tbody><tr> <td> <p>Capacidad</p> </td> <td> <p>1 TB (también de 2 TB, 250 GB y 500 GB)</p> </td> </tr> <tr> <td> <p>Tecnología</p> </td> <td> <p>Sandisk 3D TLC 64 capas</p> </td> </tr> <tr> <td> <p>Formatos</p> </td> <td> <p>Solo en unidad de 2,5 pulgadas</p> </td> </tr> <tr> <td> <p>Lectura secuencial</p> </td> <td> <p>560 MB/s</p> </td> </tr> <tr> <td> <p>Escritura secuencial</p> </td> <td> <p>530 MB/s</p> </td> </tr> <tr> <td> <p>Lectura aleatoria (IOPS)</p> </td> <td> <p>95K</p> </td> </tr> <tr> <td> <p>Escritura aleatoria (IOPS)</p> </td> <td> <p>84K</p> </td> </tr> <tr> <td> <p>TBW (TB)</p> </td> <td> <p>400</p> </td> </tr> <tr> <td> <p>Controlador</p> </td> <td> <p>Marvell 88SS1074</p> </td> </tr>  </tbody></table>
            </div>
        </div>
            <Footer />
        </div>
    )
}

export default productos
