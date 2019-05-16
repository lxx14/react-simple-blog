import React, { Component } from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Router from './src/components/Router';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Router />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
