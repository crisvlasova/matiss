import React from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
    let navOp = [{name:'Inicio', href: '#home'},{name:'Sobre Nosotros', href: '#aboutus'},{name:'Servicios', href: '#services'},{name:'Fotos', href: '#'},{name:'Contactanos!', href: '#'}]
    return (
        <nav className={style.navbarContainer}>
            <p>Matiss eventos</p>
            <div className={style.spanContainer}>
                {navOp.map(span => {return (
                    <>
                        <a href={span.href} alt={span.name}><span>{span.name}</span></a>
                    </>
                )})}
            </div>
        </nav>
    );
}

export default NavBar;
