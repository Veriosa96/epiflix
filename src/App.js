import "./App.css";
import NavBar from "./componenti/NavBar";
import SecondNavBar from "./componenti/SecondNavBar";
import Home from "./componenti/Home";
// import FilmList from "./componenti/FilmList";
// import FilmList1 from "./componenti/FilmList1";
// import FilmList2 from "./componenti/FilmList2";
import Footer from "./componenti/Footer";
import MovieDetails from "./componenti/MovieDetails";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: "#221f1f" }}>
        <NavBar/>
        <Routes>
          <Route path='/SecondNavBar' element={<SecondNavBar />} />
          <Route path='/MovieDetails/:movieId' element={<MovieDetails/>}/>
          <Route path='/' element={<Home />} />
          {/* <Route path="/FilmList" element={<FilmList />} />
          <Route path="/FilmList1" element={<FilmList1 />} />
          <Route path="/FilmList2" element={<FilmList2 />} /> */}
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
