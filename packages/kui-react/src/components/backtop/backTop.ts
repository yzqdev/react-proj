import React from "react";
import { Kui, PropTypes } from "../kui";
import Icon from "../icon";
import Transfer from "../transfer";
import Transition from "../transition";

export default class BackTop extends Kui {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.timer = null;
  }
  onScroll() {
    let top =
      document.body.scrollTop ||
      document.documentElement.scrollTop ||
      window.scrollY;
    let visible = top >= this.props.height;
    this.setState({ visible: visible });
  }
  onClick(e) {
    this.props.onClick && this.props.onClick();
    if (this.timer) {
      clearInterval(this.timer);
    }
    let height = 80;
    this.timer = setInterval(() => {
      var oTop =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.scrollY;
      if (oTop > 0) {
        document.body.scrollTop = document.documentElement.scrollTop =
          oTop - height;
        if (window.setScroll) window.setScroll(-height);
      } else {
        clearInterval(this.timer);
      }
      if (height <= 15) height = 15;
      else height -= 1;
    }, 10);
    //ie 9 不兼容 cancelAnimationFrame
    // cancelAnimationFrame(this.timer);
    // let _this = this
    // this.timer = requestAnimationFrame(function fn() {
    //     var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    //     if (oTop > 0) {
    //         document.body.scrollTop = document.documentElement.scrollTop = oTop - 150;
    //         _this.timer = requestAnimationFrame(fn);
    //     } else {
    //         cancelAnimationFrame(_this.timer);
    //     }
    // });
  }
  Styles() {
    let { bottom, right } = this.props;
    return { right: `${right}px`, bottom: `${bottom}px` };
  }
  render() {
    return (
      <Transfer onScroll={this.onScroll.bind(this)}>
        <Transition show={this.state.visible}>
          <div
            className="k-backtop"
            onClick={this.onClick.bind(this)}
            style={this.styles(this.Styles())}
          >
            {this.props.children ? (
              this.props.children
            ) : (
              <div className="k-backtop-content">
                <Icon type="md-arrow-round-up" />
              </div>
            )}
          </div>
        </Transition>
      </Transfer>
    );
  }
}
BackTop.defaultProps = {
  height: 100,
};
BackTop.propTypes = {
  onClick: PropTypes.func,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
