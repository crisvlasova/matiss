import React from 'react';
import NavBar from '../../Molecules/NavBar/NavBar.jsx';
import MainInfo from '../../Molecules/MainInfo/MainInfo.jsx';
import style from './Home.module.css';


const Home = () => {
    return (
        <div className='homeContainer'>
            <NavBar/>
            <MainInfo/>
        </div>
    )
}

export default Home;