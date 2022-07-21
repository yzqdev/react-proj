import React from "react";
import { Kui, PropTypes } from "../kui";
import Icon from "../icon";
export default class Alert extends Kui {
  constructor(props) {
    super(props);
    this.state = {
      closed: false,
    };
  }
  close(e) {
    this.setState({
      closed: true,
    });
    this.props.onClose && this.props.onClose(e);
  }
  iconType() {
    let icons = {
      info: "ios-information-circle",
      error: "ios-close-circle",
      success: "ios-checkmark-circle",
      warning: "ios-alert",
    };
    return icons[this.props.type];
  }
  classes() {
    return this.className([
      "k-alert",
      {
        [`k-alert-${this.props.type}`]: this.props.type,
      },
    ]);
  }
  showStyle() {
    return this.state.closed ? { display: "none" } : {};
  }
  render() {
    return (
      <div className={this.classes()} style={this.showStyle()}>
        {this.props.showIcon && <Icon type={this.iconType()}></Icon>}
        {this.props.closable && (
          <a className="k-alert-close" onClick={this.close.bind(this)}></a>
        )}
        {this.props.children}
      </div>
    );
  }
}
Alert.propTypes = {
  onClose: PropTypes.func,
  type: PropTypes.string,
  closable: PropTypes.bool,
  showIcon: PropTypes.bool,
};

Alert.defaultProps = {
  type: "warning",
};
