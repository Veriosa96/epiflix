import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class FilmList2 extends React.Component {
    state = {
        films: [],
    };
    componentDidMount = () => {
        this.StarWars();
    };
    
    StarWars = async () => {
        try {
        const response = await fetch(
            "https://www.omdbapi.com/?apikey=15d7562f&s=avengers"
        );
        const data = await response.json();
        const starWars = data.Search;
        console.log(data.Search);
        this.setState({ films:starWars });
        } catch (error) {
        console.log(error);
        }
    };
    
    render() {
        return (
        <div className="container-fluid px-4 mx-3" >
            <h4 className="d-flex justify-content-start">New Releases</h4>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 py-4 flex-nowrap no-gutters" style={{overflow: "hidden"}}>
            {this.state.films.map((film) => {
                return (
                <div className="col mb-2 px-1">
                    <img
                    className="img-fluid d-flex "
                style={{ height: "18em", width: "15em", }}
                    src={film.Poster}
                    alt="filmImg"
                    />
                </div>
                );
            })}
            </div>
        </div>
        );
    }
}
export default FilmList2;