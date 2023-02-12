import './App.css';
import NavBar from './componenti/NavBar';
import SecondNavBar from './componenti/SecondNavBar';
import FilmList from './componenti/FilmList';
import FilmList1 from './componenti/FilmList1';
import FilmList2 from './componenti/FilmList2';
import Footer from './componenti/Footer';



function App() {
  return (
    <div className="App" style={{backgroundColor: "#221f1f"}}>     
      <NavBar/>
      <SecondNavBar/>
      <FilmList/>
      <FilmList1/>
      <FilmList2/>
      <Footer/>     
    </div>
  );
}

export default App;
