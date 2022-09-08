import React from 'react';
import style from './Services.module.css';

const Services = () => {
    let services = ['Catering (pizza party y más!)', 'Barra de tragos (clásica y premium)', 'Decoración', 'DJ', 'Candy Bar', 'Servicios de belleza (maquillaje y peinado)',
        'Seguridad', 'Animacion', 'Fotografía y Video']
    return (
        <div className={style.servicesContainer}>
            <div className={style.servicesBg}></div>
            <h2  id='services'>Nuestros Servicios</h2>
            <p className={style.services}>
                En Matíss ofrecemos una gran cantidad de servicios, los cuales se pueden personalizar
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