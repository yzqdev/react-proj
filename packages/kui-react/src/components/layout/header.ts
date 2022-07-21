import { Kui, PropTypes } from "../kui";
import React from "react";
export default class Header extends Kui {
  render() {
    return (
      <div
        className={this.className(["k-layout-header"])}
        style={this.styles()}
      >
        {this.props.children}
      </div>
    );
  }
}
