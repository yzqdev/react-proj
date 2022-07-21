import React from "react";
import { Kui, PropTypes } from "../kui";
export default class Icon extends Kui {
  iconStyles() {
    let style = {};
    if (this.props.size) {
      style["fontSize"] = `${this.props.size}px`;
    }
    if (this.props.color) {
      style.color = this.props.color;
    }
    return style;
  }
  onClick(e) {
    this.props.onClick && this.props.onClick(e);
  }
  render() {
    return (
      <i
        className={this.className([`k-ion-${this.props.type}`])}
        style={this.styles(this.iconStyles())}
        onClick={(e) => this.onClick(e)}
      />
    );
  }
}

Icon.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
};

Icon.defaultProps = {};
