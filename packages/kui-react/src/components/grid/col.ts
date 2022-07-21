import React from "react";
import { Kui, PropTypes } from "../kui";
export default class Col extends Kui {
  colStyles() {
    let style = {};
    let p = this.props.gutter;
    if (p > 0) {
      style = { paddingLeft: p / 2, paddingRight: p / 2 };
    }
    return style;
  }

  classes() {
    return this.className([
      `k-col`,
      {
        [`k-col-${this.props.span}`]: this.props.span,
        [`k-col-offset-${this.props.offset}`]:
          this.props.offset > 0 && this.props.offset <= 24,
      },
    ]);
  }
  render() {
    return (
      <div className={this.classes()} style={this.styles(this.colStyles())}>
        {this.props.children}
      </div>
    );
  }
}

Col.defaultProps = {
  offset: 0,
};
Col.propTypes = {
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
