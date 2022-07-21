import React from "react";
import { Kui, PropTypes } from "../kui";
export default class Badge extends Kui {
  onClick(e) {
    this.props.onClick && this.props.onClick(e);
  }
  subStyle() {
    return this.props.color ? { backgroundColor: this.props.color } : {};
  }
  getCount() {
    return this.props.maxCount > this.props.count
      ? `${this.props.maxCount}+`
      : this.props.count;
  }
  render() {
    return (
      <span className={this.className(["k-badge"])} style={this.styles()}>
        {this.props.children}
        {this.props.dot ? (
          <sub className="k-badge-dot" style={this.subStyle()}></sub>
        ) : (
          <sub
            className="k-badge-count"
            onClick={this.onClick.bind(this)}
            style={this.subStyle()}
          >
            {this.getCount()}
          </sub>
        )}
      </span>
    );
  }
}

Badge.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dot: PropTypes.bool,
  color: PropTypes.string,
  maxCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
