import React from "react";
import { Kui, PropTypes } from "../kui";
export default class CarouselItem extends Kui {
  styles() {
    let { width } = this.props;
    return width ? { width: `${width}px` } : {};
  }
  render() {
    return (
      <div className={this.className("k-carousel-item")} style={this.styles()}>
        {this.props.children}
      </div>
    );
  }
}
CarouselItem.propTypes = {
  width: PropTypes.number,
};
