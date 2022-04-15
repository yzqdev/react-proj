import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function Kui(args) {
  function classNames(...args) {
    return classnames(args);
  }

  function className(...args) {
    return this.classNames.apply(this, args.concat([this.props.className]));
  }

  function styles(args) {
    return Object.assign({}, args, this.props.style);
  }
}

Kui.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
