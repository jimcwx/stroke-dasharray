import React, { Component } from "react";

class Page3 extends Component {
  render() {
    return (
      <div className="page">
        <h2>The first line doesn't have any gaps. All the other lines have exactly the same code other than the added attribute of stroke-dasharray and different values assigned for each line.</h2>
        <svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="1" x2="30" y2="1" stroke="black" />
          <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="4" />
          <line x1="0" y1="5" x2="30" y2="5" stroke="black" stroke-dasharray="4 1" />
          <line x1="0" y1="7" x2="30" y2="7" stroke="black" stroke-dasharray="4 1 2" />
          <line x1="0" y1="9" x2="30" y2="9" stroke="black" stroke-dasharray="4 1 2 3" />
        </svg>
        <button onClick={this.props.buttonClick}>Do I have your attention? or even curiosity?</button>
      </div>
    );
  }
}

export default Page3;
