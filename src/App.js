import './App.css';
import NavBar from './componenti/NavBar';
import SecondNavBar from './componenti/SecondNavBar';
import FilmList from './componenti/FilmList';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#221f1f"}}>
      <NavBar/>
      <SecondNavBar/>
      <FilmList/>
    </div>
  );
}

export default App;
