import React, { Component } from "react";

class Page2 extends Component {
  render() {
    return (
      <div className="page">
        <h2>The stroke-dasharray attribute is a presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape of certain elements.</h2>

        <h2>As a presentation attribute, it can be applied to any element(CSS) but it has effect only on the following twelve elements:altGlyph, circle, ellipse, path, line, polygon, polyline, rect, text, textPath, tref and tspan 
        </h2>
        <button onClick={this.props.buttonClick}>Can we see it in action?</button>
      </div>
    );
  }
}

export default Page2;
