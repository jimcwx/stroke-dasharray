import React, { Component } from 'react';
import './App.css';

import Page1 from "./component/Page1"
import Page2 from "./component/Page2";
import Page3 from "./component/Page3";
import Page4 from "./component/Page4";
import Page5 from "./component/Page5";

class App extends Component {
  constructor() {
    super();
    this.state={
      pageCounter:1
    }
  }

  buttonClick = () => {
    this.setState({
      pageCounter:this.state.pageCounter + 1
    })
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          {this.state.pageCounter === 1 ? <Page1 buttonClick={this.buttonClick} /> : null}
          {this.state.pageCounter === 2 ? <Page2 buttonClick={this.buttonClick} /> : null}
          {this.state.pageCounter === 3 ? <Page3 buttonClick={this.buttonClick} /> : null}
          {this.state.pageCounter === 4 ? <Page4 buttonClick={this.buttonClick} /> : null}
          {this.state.pageCounter === 5 ? <Page5 buttonClick={this.buttonClick} /> : null}
        </div>
      </div>
    );
  }
}

export default App;