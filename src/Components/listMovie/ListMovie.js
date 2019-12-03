import React, { Component } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "../modalAdd/AddMovie";

class ListMovies extends Component {
  render() {
    return (
      <div>
        <div className="cards">
          {this.props.table.map((el, key) => (
            <MovieCard
              name={el.name}
              src={el.src}
              rating={el.rating}
              key={key}
            />
          ))}
        </div>
        <div className="add-movie">
          <AddMovie addMovie={this.props.addMovie} />
        </div>
      </div>
    );
  }
}
export default ListMovies;
