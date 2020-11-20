import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Save from "./pages/Save";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App w-100 h-100">
      <Router>
        <Nav/>
        <Switch>
          <Router exact path='/books/save'>
            <Save/>
          </Router>
          <Router path='*'>
            <Search/>
          </Router>
        </Switch>
      </Router>

      <Footer/>
    </div>
  );
}


export default App;
