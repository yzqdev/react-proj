import React, { Component } from "react";
import { Kui, PropTypes } from "../kui";
export default class ButtonGroup extends Kui {
  classes() {
    return this.className([
      "k-btn-group",
      {
        ["k-btn-group-mini"]: this.props.mini,
        ["k-btn-group-circle"]: this.props.circle,
      },
    ]);
  }
  render() {
    return (
      <div className={this.classes()} style={this.styles()}>
        {" "}
        {this.props.children}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  mini: PropTypes.bool,
  circle: PropTypes.bool,
};
