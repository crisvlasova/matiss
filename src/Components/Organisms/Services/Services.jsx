import React from 'react';
import style from './Services.module.css';

const Services = () => {
    let services = ['Catering', 'Barra de tragos', 'Decoración', 'DJ', 'Candy Bar', 'Maquillaje y Peinado',
        'Seguridad', 'Animacion', 'Fotografía y Video']
    return (
        <div className={style.servicesContainer}>
            <div className={style.servicesBg}></div>
            <h2  id='services'>Nuestros Servicios</h2>
            <p className={style.services}>
                En Matiss ofrecemos una gran cantidad de servicios, los cuales se pueden personalizar
                a gusto. Entre todos ellos tenemos:
            </p>
            <br />
            <ul type='square' >
                {services.map(s => {
                    return (
                        <li key={s}>{s}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Services;