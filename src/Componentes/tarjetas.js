import React from "react";
import tarjeta1 from './IMG/Tarjeta_1.jpeg';
import tarjeta2 from './IMG/Tarjeta_2.jpeg';
import tarjeta3 from './IMG/Tarjeta_3.jpeg';
import './tarjetas.css';

function Tarjetas() {
    return (
        <div>
            <section className="tarjetas" id="servicios">
                <div className="contenedor_tarjetas">
                    <article className="articulo_tarjeta">
                        <img src={tarjeta1} alt="ERP" className="imagen_tarjeta"/>
                        <div className="texto_tarjeta">
                            <span className="descripcion_tarjeta">Brindamos consultoría, implementación, soporte y capacitación técnica en ERP Calipso Corporate.</span>
                            <h2 className="titulo_tarjeta">ERP</h2>
                            <a href="#" className="boton_tarjeta">Leer más</a>
                        </div>
                    </article>
                    <article className="articulo_tarjeta">
                        <img src={tarjeta2} alt="BASE DE DATOS" className="imagen_tarjeta"/>
                        <div className="texto_tarjeta">
                            <span className="descripcion_tarjeta">Realizamos la administración, mantenimiento, backup, y control de seguridad de bases de hasta 50 Tb.</span>
                            <h2 className="titulo_tarjeta">BASE DE DATOS</h2>
                            <a href="#" className="boton_tarjeta">Leer más</a>
                        </div>
                    </article>
                    <article className="articulo_tarjeta">
                        <img src={tarjeta3} alt="INTEGRACIÓN DE SISTEMAS" className="imagen_tarjeta"/>
                        <div className="texto_tarjeta">
                            <span className="descripcion_tarjeta">Centralizamos la información y evitamos la duplicación a través de la integración de sistemas.</span>
                            <h2 className="titulo_tarjeta">INTEGRACIÓN DE SISTEMAS</h2>
                            <a href="#" className="boton_tarjeta">Leer más</a>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Tarjetas;