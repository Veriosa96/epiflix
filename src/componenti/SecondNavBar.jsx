import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"


class SecondNavBar extends React.Component {
    render() {
        return (
            <div className="container-fluid px-4 mx-3" style={{backgroundColor: "#221f1f"}}>
            <div class="d-flex justify-content-between">
            <div class="d-flex">
              <h2 class="mb-4">TV Shows</h2>
              <div class="dropdown ml-4 mt-1">
                <button
                  class="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  
                >
                  Genres &nbsp;
                </button>
                <div
                  class="dropdown-menu bg-dark"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item text-white bg-dark" href="alt">Comedy</a>
                  <a class="dropdown-item text-white bg-dark" href="alt">Drama</a>
                  <a class="dropdown-item text-white bg-dark" href="alt">Thriller</a>
                </div>
              </div>
            </div>
            <div>
              <i class="fa fa-th-large icons"></i>
              <i class="fa fa-th icons"></i>
            </div>
          </div> 
          </div>
        )}}

        export default SecondNavBar