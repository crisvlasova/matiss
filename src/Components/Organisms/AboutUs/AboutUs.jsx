import React from 'react';
import style from './AboutUs.module.css';

const AboutUs = () => {
    let direc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.392445071657!2d-58.590921184798724!3d-34.695280280435775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc714d4c52247%3A0x43ddb9d223af369f!2sMatiss%20eventos!5e0!3m2!1ses-419!2sar!4v1661396653242!5m2!1ses-419!2sar"
    return (
        <div className={style.aboutUsContainer} id='aboutus'>
            <h2>Quienes somos?</h2>
            <p>
                Somos Matíss, un salon con un estilo americano único, con un ambiente cálido, hogareño y familiar; te ofrecemos la solución ideal para el desarrollo de eventos sociales y corporativos. Acompañamos a nuestros clientes con la búsqueda del mejor espacio que se ajuste a las necesidades del evento. Nos distinguimos por nuestra calidad de atención al cliente, nuestro estilo,
                nuestra comida y los servicios que tenemos para ustedes. Tenemos capacidad de hasta 100 personas, catering, barra
                de tragos y muchos servicios más que podes ver <a href='#services'>acá</a>. Estamos ubicados en Sarrachaga 5562, Isidro Casanova,
                La Matanza. Te esperamos para conocer el espacio y asesorarte con todo lo relacionado a tu evento!
            </p>
            <iframe src={direc} height='300' width='500' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default AboutUs;
