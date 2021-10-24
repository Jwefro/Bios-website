import React from 'react'
import './productos.css'
import Footer from '../footer/footer';
import Carousel from '../carousel/carousel'
import TD8816  from '../../assets/imagenes/TD8816.png';
import TDW8961N  from '../../assets/imagenes/TDW8961N.png';
import TLWR841N  from '../../assets/imagenes/TLWR841N.png';


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

        </div>



            <Footer />
        </div>
    )
}

export default productos
