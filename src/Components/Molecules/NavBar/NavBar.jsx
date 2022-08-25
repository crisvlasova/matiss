import React from 'react';
import home from '../../../icons/home.png';
import party from '../../../icons/party.png';
import cocktail from '../../../icons/cocktail.png';
import phone from '../../../icons/phone.png';
import style from './NavBar.module.css';

const NavBar = () => {
    let navOp = [
        {
            name:'Inicio',
            img: home,
        },
        {
            name:'Sobre Nosotros',
            img: party,
        },
        {
            name:'Servicios',
            img: cocktail,
        },
        {
            name:'Contactanos!',
            img: phone,
        },
    ]
    return (
        <nav className={style.navbarContainer}>
            <p>Matiss eventos</p>
            <div className={style.spanContainer}>
                {navOp.map(span => {return (
                    <>
                        <span>{span.name}</span>
                    </>
                )})}
            </div>
        </nav>
    );
}

export default NavBar;
