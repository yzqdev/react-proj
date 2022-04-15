import { Kui, PropTypes } from "../kui";
import React from "react";
export default class Layout extends Kui {
  render() {
    return (
      <div className={this.className(["k-layout"])} style={this.styles()}>
        {this.props.children}
      </div>
    );
  }
}
