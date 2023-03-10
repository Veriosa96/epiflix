import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"


class SecondNavBar extends React.Component {
    render() {
        return (
            <div className="container-fluid px-4 mx-3" style={{backgroundColor: "#221f1f"}}>
            <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="mb-4">TV Shows</h2>
              <div className="dropdown ml-4 mt-1">
                <button
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  
                >
                  Genres &nbsp;
                </button>
                <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                    <ul>
                      <li className="dropdown-item text-white bg-dark">Comedy</li>
                      <li className="dropdown-item text-white bg-dark">Drama</li>
                      <li className="dropdown-item text-white bg-dark">Thriller</li>
                    </ul>
                </div>
              </div>
            </div>
            <div>
              <i className="fa fa-th-large icons"></i>
              <i className="fa fa-th icons"></i>
            </div>
          </div> 
          </div>
        )}}

        export default SecondNavBar