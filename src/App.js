import React, { Component } from "react";
import WithSpiner from "./Components/spinner/Spiner";
import MovieApp from "./Components/MovieApp";
const Spiner = WithSpiner(MovieApp);
class App extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    return (
      <div className="app">
        <Spiner isLoading={this.state.isLoading} />
        {/* <MovieApp  /> */}
      </div>
    );
  }
}
export default App;
