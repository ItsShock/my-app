import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: { name: ""}
    };
  }
    componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/3?limit=1")
    .then((d) => d.json())
    .then((d) => {
      this.setState((state) => ({ pokemon: d }));
    })
    .catch((err) => console.log(err));
  
  }
  render() {
  return (
    <div className="App">
      <p>{this.state.pokemon.name}</p>
    </div>
  );
  }
}


export default App;
