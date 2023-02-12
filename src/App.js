import './App.css';
import NavBar from './componenti/NavBar';
import SecondNavBar from './componenti/SecondNavBar';
import FilmList from './componenti/FilmList';
import Footer from './componenti/Footer';


function App() {
  return (
    <div className="App" style={{backgroundColor: "#221f1f"}}>     
      <NavBar/>
      <SecondNavBar/>
      <FilmList/>
      <Footer/>     
    </div>
  );
}

export default App;
