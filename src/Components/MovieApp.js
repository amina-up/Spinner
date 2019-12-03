import React, { Component } from "react";
import NavbarSearch from "./navBarSearch/NavBarSearch";
import StarRating from "./navBarSearch/StartRating";
import ListMovies from "./listMovie/ListMovie";
import Spiner from "./spinner/Spiner";

class MovieApp extends Component {
  state = {
    films: [
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-rzus2fCA8WAj5apV3wLy7rmc5MrwiFA7lVmyAzJRvOQjHLVZ",
        name: "The stary",
        rating: 2
      },
      {
        src:
          "https://amc-theatres-res.cloudinary.com/v1562680032/amc-cdn/production/2/movies/56400/56408/PosterDynamic/83473.jpg",
        name: "Dora Dora",
        rating: 1
      },
      {
        src:
          "https://regalcdn.azureedge.net/DoctorSleep/HO00009866/TV_SmallPosterImage/20191009-124901292.jpg",
        name: "Doctor Sleep",
        rating: 2
      }
    ],

    userInput: "",
    rate: 0
  };

  ChangeValue = input => {
    this.setState({
      userInput: input
    });
  };
  filterRate = count => {
    this.setState({ rate: count });
  };

  addMovie = newMovie => {
    this.setState({
      films: this.state.films.concat(newMovie)
    });
  };

  render() {
    return (
      <div className="app">
        <Spiner />
        <div className="navbar">
          <NavbarSearch filterSearch={this.ChangeValue} />
          <StarRating changeRate={this.filterRate} count={this.state.rate} />
        </div>

        <ListMovies
          addMovie={this.addMovie}
          table={this.state.films.filter(
            el =>
              el.name
                .toLowerCase()
                .includes(this.state.userInput.toLowerCase().trim()) &&
              el.rating >= this.state.rate
          )}
        />
      </div>
    );
  }
}
export default MovieApp;
