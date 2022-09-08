import React from 'react';
import style from './GetInTouch.module.css'
import whatsapp from '../../../icons/whatsapp.png'
import facebook from '../../../icons/facebook.png'
import instagram from '../../../icons/instagram.png'

const GetInTouch = () => {
    let networks = [
        {
            href: 'https://api.whatsapp.com/send?phone=5491124596656&text=',
            name: 'Whatsapp',
            icon: whatsapp,
        },
        {
            href: 'https://www.facebook.com/matiss01',
            name: 'Facebook',
            icon: facebook,
        },
        {
            href: 'https://www.instagram.com/matisseventos/',
            name: 'Instagram',
            icon: instagram,
        }
    ]
    return (
        <footer id='getintouch'>
            <h3>Para más información puedes contactarnos traves de nuestras redes:</h3>
            <main className={style.mainContainer}>
                {networks.map(net => {
                    return (
                        <a href={net.href} className={style.networkContainer} target='__blank' rel='noopener'>
                            <img src={net.icon} />
                            {net.name}
                        </a>
                    )
                })}
            </main>
        </footer>
    );
}

export default GetInTouch;