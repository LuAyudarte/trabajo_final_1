import React, { useEffect, useRef } from "react";
import logo2 from './IMG/Logotipo_color_horizontal.jpg';
import './header.css';

function Header() {
    const toggleRef = useRef(null);
    const itemsRef = useRef(null);

    useEffect(() => {
        const handleToggleClick = () => {
            if (itemsRef.current && toggleRef.current) {
                itemsRef.current.classList.toggle("open");
                toggleRef.current.classList.toggle("close");
            }
        };

        const toggleButton = toggleRef.current;
        if (toggleButton) {
            toggleButton.addEventListener('click', handleToggleClick);
        }

        return () => {
            if (toggleButton) {
                toggleButton.removeEventListener('click', handleToggleClick);
            }
        };
    }, []);

    return (
        <div>
            <header>
                <nav className="navbar" id="barra">
                    <a href="#carousel" className="nav-logo">
                        <img src={logo2} alt="Logo de la empresa" className="logo"/>
                    </a>
                    <div className="nav_items" ref={itemsRef}>
                        <a href="#servicios">Servicios</a>
                        <a href="#acerca_de">Acerca de</a>
                        <a href="#formulario">Contacto</a>
                    </div>
                    <div className="nav_toggle" ref={toggleRef}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
