import React from "react";
import logo from './IMG/Ezinda.ico'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
        <div>
            <footer className="pie-pagina" id="acerca_de">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <a href="">
                            <img src={logo} alt="Logo de la empresa"/>
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eligendi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eligendi.</p>
                </div>
                <div className="box">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
            </div>
            <div className="grupo2">
                <small>&copy; 2024 <b>Ezinda</b> - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    </div>
    )
}

export default Footer