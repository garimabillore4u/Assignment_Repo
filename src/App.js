import React, {Component}   from 'react';
import logo from './logo.svg';
import './App.css';
import $                    from 'jquery';
import jQuery               from 'jquery';
import Axios        from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import 'jquery/src/jquery';
// import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default class App extends Component {
  constructor(props){
        super(props);
        
    this.state = {
          
    }
  } 

  componentDidMount(){
    
  }

  handleSumbit = () => { 
    var event = event.preventdefault();
    Axios.post("https://poc.molecularconnections.com/Tree/getTerm")
      .then(response => {
          console.log("response ==================>", response);
      })
      .catch(error=>{
          console.log("Error while getting data.",error.message,'error');
      })    
  }

  toggleLevelOneCard = (event) => {   
    var i  = event.currentTarget.id.split("-");
    var activeClass =  $("#levelOne-"+i[1]).hasClass("levelOneToggleActive");
    console.log("activeClass------------------->", activeClass);
    $(".levelOneContainer").removeClass("LevelOneToggleActive");
    $(".expandIcon").removeClass("arrowToggleActive");

    if(!activeClass){
        console.log("inside not activeClass==============>",activeClass) ;  
        $("#levelOne-"+i[1]).addClass("LevelOneToggleActive");
        $("#arrow-"+i[1]).addClass("arrowToggleActive");

    }else{
        $("#levelOne-"+i[1]).removeClass("LevelOneToggleActive");
        $("#arrow-"+i[1]).removeClass("arrowToggleActive");

    }
  }

render(){
  var cardBtnBg = ""
  return (
    <div>
      <div className="App">
        <div>
          <div className="levelOneCss" onClick={this.toggleLevelOneCard}  id={"levelOneToggleArrow"}>
            Crop Commodities
            <div className={"expandBtn "+cardBtnBg}>
              <i className="fa fa-angle-right expandIcon" aria-hidden="true" id={"arrow"}></i>                                                         
            </div>
          </div>
        {/*  <div>
           <ul id="myUL">
            <li ><span>Crop Commodities</span>
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
        </div>*/}
      </div>
    </div>
  </div>
  );

  }
}

