import React from 'react';
import home from '../../../icons/home.png';
import party from '../../../icons/party.png';
import cocktail from '../../../icons/cocktail.png';
import phone from '../../../icons/phone.png';
import style from './NavBar.module.css';

const NavBar = () => {
    let navOp = ['Inicio','Sobre Nosotros','Servicios','Fotos','Contactanos!']
    return (
        <nav className={style.navbarContainer}>
            <p>Matiss eventos</p>
            <div className={style.spanContainer}>
                {navOp.map(span => {return (
                    <>
                        <span>{span}</span>
                    </>
                )})}
            </div>
        </nav>
    );
}

export default NavBar;
