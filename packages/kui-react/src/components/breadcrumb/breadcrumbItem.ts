import React from "react";
import Icon from "../icon";
import { Kui, PropTypes } from "../kui";
export default class BreadcrumbItem extends Kui {
  toPath() {
    let { to, replace } = this.props;
    to && replace
      ? this.context.router.history.replace(replace)
      : this.context.router.history.push(to);
  }
  render() {
    let { children, icon, separator } = this.props;
    return (
      <span
        className={this.className("k-breadcrumb-item")}
        style={this.styles()}
      >
        <span className="k-breadcrumb-link" onClick={this.toPath.bind(this)}>
          {icon && <Icon type={icon} />}
          {children}
        </span>
        <span className="k-breadcrumb-separator">{separator}</span>
      </span>
    );
  }
}
BreadcrumbItem.contextTypes = {
  router: PropTypes.object.isRequired,
};
BreadcrumbItem.defaultProps = {
  separator: "/",
};
BreadcrumbItem.propTypes = {
  separator: PropTypes.string,
  to: PropTypes.string,
  replace: PropTypes.bool,
  icon: PropTypes.string,
};
