import { Kui, PropTypes } from "../kui";
import React from "react";
export default class Content extends Kui {
  render() {
    let style = this.props.pullLeft ? { marginRight: 200 } : {};
    return (
      <div
        style={this.styles(style)}
        className={this.className(["k-layout-content"])}
      >
        {this.props.children}
      </div>
    );
  }
}
Content.propTypes = {
  pullLeft: PropTypes.bool,
};
