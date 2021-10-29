import React from 'react'
import './productos.css'
import Footer from '../footer/footer';
import Carousel from '../carousel/carousel';
import ModalProductos from '../modalProductos/modalProductos'
import sandisk  from '../../assets/imagenes/sandisk.png';
import pngegg  from '../../assets/imagenes/pngegg.png';





function productos() {
    return (
        <div>
           <Carousel/>

        <ModalProductos/>
      
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
