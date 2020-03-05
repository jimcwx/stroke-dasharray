import React, { Component } from 'react';

class Page1 extends Component {
  render() {
    return (
      <div className="page">
        <h1>stroke-dasharray? What is it?</h1>
        <button onClick={this.props.buttonClick}>Let's find out together!</button>
      </div>
    );
  }
}

export default Page1;