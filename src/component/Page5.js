import React, { Component } from "react";

class Page5 extends Component {
  render() {
    return (
      <div className="page">
        <div className="shapes">
          <svg height="200" width="200" class="circle">
            <circle cx="200" cy="100" r="100" stroke="limegreen" stroke-width="10" stroke-dasharray="10" fill="grey" />
          </svg>
          <svg width="200" height="200" class="rect">
            <rect width="200" height="200" stroke="red" stroke-width="10" stroke-dasharray="10" fill="grey" />
          </svg>
        </div>
        <button onClick={this.props.buttonClick}>Wow is there more?</button>
      </div>
    );
  }
}

export default Page5;
