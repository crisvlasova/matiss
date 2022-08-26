import React from 'react';
import style from './Home.module.css';


const Home = () => {
    return (
        <div className={style.mainInfoContainer} id='home'>
            <main className={style.mainInfo}>
                <p className='animate__animated animate__fadeIn animate__slow'>Matiss Eventos, un lugar distinto</p>
            </main>
        </div>
    )
}

export default Home;