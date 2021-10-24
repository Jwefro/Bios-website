import React from 'react';
import lenovo from '../../assets/imagenes/lenovo.png';
import lenovo1 from '../../assets/imagenes/lenovo1.png';
import lenovo2 from '../../assets/imagenes/lenovo2.png';
import './carousel.css';

function carousel() {
    return (
        <div>
             <div className="portadaProductos">
                <div className="carrusel">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="separadorimg">
            <div className="textlenovo">
                <h3>Ideapad 330 (14", AMD)</h3>
            <p>A veces, es mejor mantener las cosas simples. Potenciada por el procesamiento AMD y mejorada con gráficos discretos opcionales, Ideapad 330 es portátil y fácil de usar. Está disponible en una variedad de colores sofisticados y es segura, duradera y está lista para las tareas actuales - y las del futuro. La unidad óptica es opcional y la cámara puede variar.</p>
            </div>
            <div className=""> <img src={lenovo} className="imgcarousel"  alt="..."/></div>
        </div>
     
    </div>
    <div className="carousel-item">
    <div className="separadorimg">
            <div className="textlenovo">
                <h3>Diseñada para seguir tu ritmo</h3>
            <p>Una laptop no es solo un producto electrónico, también es una inversión. Es por eso que diseñamos la Ideapad 330 con un recubrimiento protector especial para evitar el desgaste y pies de goma en la cubierta inferior para maximizar la ventilación y extender la vida útil del producto.</p>
            </div>
            <div className=""> <img src={lenovo1} className="imgcarousel"  alt="..."/></div>
        </div>
    </div>
    <div className="carousel-item">
    <div className="separadorimg">
            <div className="textlenovo">
                <h3>Windows 10 sigue mejorando</h3>
            <p>Aprovecha lo mejor de Windows 10 con una nueva actualización llena de funciones espectaculares. La aplicación de Fotos reinventada hace que sea más fácil (y más divertido) contar tu historia con un video: agrégale una banda sonora, utiliza transiciones, efectos en 3D y más. E intercambiar es más rápido que nunca, con las configuraciones intuitivas que hacen que te sea fácil conectarte al instante con las personas que más te importan.</p>
            </div>
            <div className=""> <img src={lenovo2} className="imgcarousel"  alt="..."/></div>
        </div>

    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
            </div>
        </div>
    )
}

export default carousel
