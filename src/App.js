import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/pokemon/:id" component={Pokemon} />
          <Route path="/" component={PokemonList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
