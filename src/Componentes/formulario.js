import React, { useState } from "react";
import './formulario.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [errores, setErrores] = useState({});

    const manejarCambiosEnNombre = (event) => setNombre(event.target.value);
    const manejarCambiosEnCorreo = (event) => setCorreo(event.target.value);
    const manejarCambiosEnTelefono = (event) => setTelefono(event.target.value);
    const manejarCambiosEnAsunto = (event) => setAsunto(event.target.value);
    const manejarCambiosEnMensaje = (event) => setMensaje(event.target.value);

    const validarFormulario = () => {
        const nuevosErrores = {};
        if (nombre.trim() === '') {
            nuevosErrores.nombre = 'El nombre es obligatorio';
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(correo)) {
            nuevosErrores.correo = 'El correo no es válido';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const manejarEnvioForm = (event) => {
        event.preventDefault();
        if (validarFormulario()) {
            console.log('Datos del formulario:', { nombre, correo, telefono, asunto, mensaje });
        }
    };

    return (
        <div>
            <section className="content" id="formulario">
                <h1 className="logo_form">Contáctese con <span>Nosotros</span></h1>
                <div className="box-form">
                    <div className="form-contact">
                        <h3>Contáctanos</h3>
                        <form onSubmit={manejarEnvioForm} action="https://formspree.io/f/xbjnbpjl" method="POST">
                            <p>
                                <label>Nombre completo</label>
                                <input type="text" value={nombre} name="Nombre completo" id="Nombre completo" onChange={manejarCambiosEnNombre}/>
                                {errores.nombre && <span style={{ color: 'red' }}>{errores.nombre}</span>}
                            </p>
                            <p>
                                <label>Correo electrónico</label>
                                <input type="email" value={correo} name="Email" onChange={manejarCambiosEnCorreo}/>
                                {errores.correo && <span style={{ color: 'red' }}>{errores.correo}</span>}
                            </p>
                            <p>
                                <label>Teléfono</label>
                                <input type="tel" value={telefono} name="Telefono" onChange={manejarCambiosEnTelefono} required/>
                            </p>
                            <p>
                                <label>Asunto</label>
                                <input type="text" value={asunto} name="Asunto" onChange={manejarCambiosEnAsunto}/>
                            </p>
                            <p className="block">
                                <label>Mensaje</label>
                                <textarea value={mensaje} name="Mensaje" rows="3" onChange={manejarCambiosEnMensaje}></textarea>
                            </p>
                            <p className="block">
                                <button type="submit">Enviar</button>
                            </p>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h4>Más información</h4>
                        <ul>
                            <li><FontAwesomeIcon icon={faLocationDot} /> San Miguel de Tucumán</li>
                            <li><FontAwesomeIcon icon={faPhone} /> +54 9 381 685-1093</li>
                            <li><FontAwesomeIcon icon={faEnvelope} /> Contactate (mayudarte@ezinda.com)</li>
                        </ul>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam laboriosam, optio sint quisquam odit voluptas inventore necessitatibus unde dolores quam!</p>
                        <p>Ezinda.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Formulario;
