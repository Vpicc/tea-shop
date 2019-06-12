import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AllTeas from './pages/AllTeas';
import Home from './pages/Home';
import Recommended from './pages/Recommended';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: null,
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/all-teas"> <AllTeas /> </Route>
          <Route path="/recommended"> <Recommended /> </Route>
          <Route path="/shopping-cart"> <ShoppingCart /> </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
