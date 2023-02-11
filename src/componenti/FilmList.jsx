import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class FilmList extends React.Component {
    render() {
    return (
        <div className="container-fluid px-4 mx-3" style={{backgroundColor: "#221f1f"}}>
          <h4 className="d-flex justify-content-start">Trending Now</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters">
        
          <div className="col mb-2 px-1">
            <img className="img-fluid" src={require("../assets/1.png")} alt="filmImg"/>
          </div>

        </div>
        <h4 className="d-flex justify-content-start">Watch it Again</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters">
            
          <div className="col mb-2 px-1">
            <img className="img-fluid" src={require("../assets/7.png")} alt="filmImg"/>
          </div>

        </div>
        <h4 className="d-flex justify-content-start">New Releases</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters">         
          <div className="col mb-2 px-1">
          <img className="img-fluid" src={require("../assets/10.png")} alt="filmImg"/>
          </div>

        </div>
        </div>
    )}

}

export default FilmList;