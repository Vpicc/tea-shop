import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AllTeas from './pages/AllTeas';
import Home from './pages/Home';
import Recommended from './pages/Recommended';
import ShoppingCart from './pages/ShoppingCart';
import { fetchTeas, postOrder } from './api/Api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: null,
    }
  }

  componentWillMount() {
    fetchTeas((list) => {console.log(list)});
    postOrder(`{\n\t"client": {\n\t\t"name": "Eduardo",\n\t\t
    "email": "eduardo@service.com",\n\t\t
    "country": "Brazil"\n\t},\n\t
    "teas": [\n\t\t{\n\t\t\t"id": 1,\n\t\t\t"quantity": 2\n\t\t},\n\t\t{\n\t\t\t"
    id": 4,\n\t\t\t"quantity": 3\n\t\t}\n\t]\n}`,(response) => {console.log(response)});
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
