import React, { Component } from 'react';
import './App.css';

var wisdoms = [
"Angry people are not always wise.n",
"There are no ordinary moments.n",
"We should forgive our enemies, but not before they are hanged.",
"My head’ll explode if I continue with this escapism."
]

var author = [
"- Jane Austen",
"-Dan Millman",
"-Heinrich Heine",
"-Jess C Scott" 
]

class App extends Component {
  constructor(props) {
    super(props);
    
    var index = Math.floor(Math.random() * wisdoms.length);
    
    this.state = {
      wisdom: wisdoms[index],
      author: author[index]
};
    
    this.setRandomWisdom = this.setRandomWisdom.bind(this);
    this.addWisdom = this.addWisdom.bind(this);
  }
  
  setRandomWisdom() {
    var index = Math.floor(Math.random() * wisdoms.length);
    
    this.setState({
      wisdom: wisdoms[index],
      author: author[index]
    });
  }
  
  addWisdom() {
    wisdoms.push(prompt("What new wisdom do you offer?"));
  }

  removeCurrentWisdom() {
    var index = wisdoms.indexOf(this.state.wisdom);
    wisdoms.splice(index, 1);
  }
  
  render() {
    return (
      <div className="App">
       <h1> {this.state.wisdom}</h1>
       <h2> {this.state.author}</h2>
  <button className="more" onClick={this.setRandomWisdom}>Another</button>
  <button className="new-wisdom" onClick={this.addWisdom}>Contribute</button>
      </div>
    );
  }
}

export default App;
