import React from "react";
import { Kui } from "../kui";
export default class Breadcrumb extends Kui {
  render() {
    return (
      <div className={this.className("k-breadcrumb")} style={this.styles()}>
        {this.props.children}
      </div>
    );
  }
}
