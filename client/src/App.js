import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App w-100 h-100">
      <nav className=' container border border-primary m-1 p-1 mx-auto' style={{width: '100vw'}}>
        Nav bar
      </nav>
      <div className=' container border border-primary m-1 p-1 mx-auto' style={{width: '100vw'}}>
        <form>
          <div>search new book from</div>
          <input></input>
          <button type='submit'>Serach Book</button>
        </form>
      </div>
      <div id='searchResult' className='container border border-primary mx-auto' style={{width: '100vw'}}>
        <div>
          Search Result Container
        </div>
        <div className='row border border-primary m-1 p-1'>
          <ul className='col-11 border border-primary m-1 p-1 mx-auto'>
            Result
          </ul>
        </div>
      </div>
      <div id='saveList' className='container border border-primary mx-auto mt-2' style={{width: '100vw'}}>
        <div>
          Save List
        </div>
        <div className='row border border-primary m-1 p-1'>
          <ul className='col-11 border border-primary m-1 p-1 mx-auto'>
            Save List
          </ul>
        </div>
      </div>
      <footer className='footer border border-primary'>
        Footer
      </footer>
    </div>
  );
}


export default App;
