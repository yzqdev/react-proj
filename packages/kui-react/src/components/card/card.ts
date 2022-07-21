import React from "react";
import { Kui, PropTypes } from "../kui";
import Icon from "../icon";

export default class Card extends Kui {
  classes() {
    return this.className([
      "k-card",
      {
        ["k-card-border"]: this.props.bordered,
      },
    ]);
  }
  render() {
    let { icon, title, body, extra, children } = this.props;
    return (
      <div className={this.classes()} style={this.styles()}>
        <div className="k-card-head">
          {icon && <Icon type={icon} />}
          <p>{title}</p>
        </div>
        <div className="k-card-extra">{extra}</div>
        <div className="k-card-body">{children}</div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
  bordered: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.string,
};
