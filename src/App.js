import React, { Component } from 'react';
// import Shuffle from "react-shuffle";
import Shuffle from "shuffle-array";
import Header from "./components/Header";
import MemoryCards from "./components/MemoryCards";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import charecters from "./GoT.json";
import './App.css';

class App extends Component {

  state = {
    message: "",
    score: 0,
    highScore: 0,
    clicked: [],
    Charecters: charecters
  };

  componentDidMount() {
    this.setState({ message: "Click an image to begin!" })
  }


  handleBtnClick = event => {
    // setting the ID equal to a const
    const click = event.target.attributes.getNamedItem("id").value;
    // if / else to write game logic.. If id is in clicked array you lose reset state.
    if (this.state.clicked.includes(click)) {
      // setting state message and score for an image clicked more than once
      this.setState({ 
        message: "You already clicked that image!",
        score: 0,
        clicked: []
    });
    //setting shuffle array for if and else
      this.state.Charecters.sort(function(a,b) {return 0.5 - Math.random()});
    }else{
      // shuffle
      this.state.Charecters.sort(function(a,b) {return 0.5 - Math.random()});
      // adding the image ID to the clicked array
      this.state.clicked.push(click);
      // setting state to update message score and highscore for a correct pick
      this.setState({ 
        message: "Correct!! Pick another image.",
        score: this.state.score + 1,
        
      });
      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.highScore + 1});
      }
    }
  }
  


  render() {
    return (
      <Wrapper>
        <Navbar message={this.state.message} score={this.state.score} highScore={this.state.highScore} />
        <Header>
          <h1>GoT Clicky Game!</h1>
          <h2>Click on an image to score, but don't click the same image more than once!</h2>
        </Header>
        <div className="flex-container">
          {this.state.Charecters.map(charecter => (
            <MemoryCards
              id={charecter.id}
              key={charecter.id}
              img={charecter.img}
              handleBtnClick={this.handleBtnClick}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}
export default App;
