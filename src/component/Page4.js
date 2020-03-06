import React, { Component } from "react";

class Page4 extends Component {
  constructor() {
    super();
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover = () => {
    this.setState({
      isHovering: !this.state.isHovering
    });
  };

  render() {
    return (
      <div className="page">
        <h2>Member I talked about it being a presentation attribute and can be applied to elements in css? There's more to it!</h2>
        <h2>You can apply a special css attribute in a keyframe animation called stroke-dashoffset to achieve the below effect. Keep in mind that I am only using lines here, this can be applied to all kinds of shapes, even user created ones using path. The possibilities are endless!</h2>

        {!this.state.isHovering ? (
          <svg className="cool" viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg" onClick={this.handleMouseHover}>
            <line x1="0" y1="1" x2="30" y2="1" stroke="black" />
            <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="4" />
            <line x1="0" y1="5" x2="30" y2="5" stroke="black" stroke-dasharray="4 1" />
            <line x1="0" y1="7" x2="30" y2="7" stroke="black" stroke-dasharray="4 1 2" />
            <line x1="0" y1="9" x2="30" y2="9" stroke="black" stroke-dasharray="4 1 2 3" />
          </svg>
        ) : (
          <img className="code" src={process.env.PUBLIC_URL + `/Page4.png`} onClick={this.handleMouseHover} alt="" />
        )}

        <button onClick={this.props.buttonClick}>Show me these possibilities!</button>
      </div>
    );
  }
}

export default Page4;
