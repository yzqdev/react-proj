import React from "react";
import { Kui, PropTypes } from "../kui";

export default class Button extends Kui {
  classes() {
    return this.className(
      "k-button",
      this.props.type && `k-button-${this.props.type}`,
      {
        "is-mini": this.props.mini,
        "is-circle": this.props.circle,
        "is-hollow": this.props.hollow,
      }
    );
  }
  onClick(e) {
    this.props.onClick && this.props.onClick(e);
  }
  render() {
    return (
      <button
        style={this.styles()}
        className={this.classes()}
        type="button"
        disabled={this.props.disabled}
        onClick={this.onClick.bind(this)}
      >
        {this.props.icon && <i className={`icon k-ion-${this.props.icon}`}/>}
        {this.props.children && <span>{this.props.children}</span>}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  mini: PropTypes.bool,
  circle: PropTypes.bool,
  hollow: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
};

Button.defaultProps = {
  type: "",
  mini: false,
  circle: false,
  hollow: false,
  disabled: false,
};
