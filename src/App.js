import './App.css';
import NavBar from './Components/Organisms/NavBar/NavBar.jsx'
import Home from './Components/Organisms/Home/Home.jsx'
import AboutUs from './Components/Organisms/AboutUs/AboutUs';
import Services from './Components/Organisms/Services/Services';
import GetInTouch from './Components/Organisms/GetInTouch/GetInTouch';



function App() {
  return (
    <div className="App">
        <NavBar />
        <Home />
        <AboutUs />
        <Services />
        <GetInTouch />
        <a href='#' alt='arrow' className='whatsapp'>
            ⇈
        </a>
    </div>
  );
}

export default App;
