import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import List from '../components/List';
import Desc from '../components/Desc';
import { Route, BrowserRouter } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={List} />
          <Route path="/issue/:id" component={Desc} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
