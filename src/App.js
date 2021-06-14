import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios        from 'axios';

function App() {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    var toggler = document.getElementsByClassName("caret");
    var i;
    Axios.post("https://poc.molecularconnections.com/Tree/getTerm")
      .then(response => {
        console.log("response------->", response);
        for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function() {
          this.parentElement.querySelector(".nested").classList.toggle("active");
          this.classList.toggle("caret-down");
        });
      }
        
    })  

  });
  return (
    <div className="App">
      <header className="App-header">
       
       <ul id="myUL">
        <li><span className="caret">Crop Commodities</span>
          <ul className="nested">
            <li>BT</li>
            <li><span className="caret">NT</span>
              <ul className="nested">
                <li>Fruit</li>
                <li>Herbs & Spices</li>
                <li>Grases</li>
                <li>Nuts & Seeds</li>
                <li><span className="caret">Vegetables</span>
                   <ul className="nested">
                    <li>BT</li>
                    <li>RT</li>
                    <li><span className="caret">NT</span>
                      <ul className="nested">
                        <li>Vegetable without sauce, including cream style corn and stewed tomatoes</li>
                        <li>Vegetable with sauce</li>
                        <li>Vegetable primarily used for garnish or flavouring, fresh, canned or frozen but not dried</li>
                        <li>Seaweed</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Processing Crop</li>
                <li>Food Crop</li>
                <li>Stalk Stem crops</li>
              </ul>
            </li>  
          </ul>
        </li>
      </ul>
      </header>
    </div>
  );
}

export default App;

