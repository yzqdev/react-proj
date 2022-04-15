import React from "react";
import { Kui, PropTypes } from "../kui";
export default class Affix extends Kui {
  constructor(props) {
    super(props);
    this.state = {
      showBlob: false,
      width: 0,
      height: 0,
    };
    this.scroll = this.scroll.bind(this);
    this.blobRef = React.createRef();
    this.affixRef = React.createRef();
  }
  classes() {
    return this.className([{ ["k-affix"]: this.state.showBlob }]);
  }
  blobStyle() {
    return {
      width: `${this.state.width}px`,
      height: `${this.state.height}px`,
    };
  }
  relStyles() {
    let style = {};
    if (this.props.offsetBottom) {
      style.bottom = `${this.props.offsetBottom}px`;
    } else {
      style.top = `${this.props.offsetTop}px`;
    }
    return style;
  }
  scroll() {
    let { showBlob } = this.state;
    let { onChange, offsetBottom, offsetTop } = this.props;
    if (showBlob) {
      let pos = this.blobRef.current.getBoundingClientRect();
      //unfixedBottom
      if (offsetBottom !== undefined && offsetBottom >= 0) {
        let bodyPos = document.body.getBoundingClientRect();
        if (pos.top + pos.height <= bodyPos.height) {
          onChange && onChange(false);
          this.setState({ showBlob: false });
        }
        return;
      }
      //unfixedTop
      if (pos.top >= offsetTop) {
        this.setState({ showBlob: false });
        onChange && onChange(false);
      }
    } else {
      let pos = this.affixRef.current.getBoundingClientRect();
      //fixedBottom
      if (offsetBottom >= 0) {
        // console.log(pos)
        let bodyPos = document.body.getBoundingClientRect();
        if (pos.top + pos.height >= bodyPos.height) {
          onChange && onChange(true);
          this.setState({
            showBlob: true,
            width: pos.width,
            height: pos.height,
          });
        }
        return; //只能存在一种状态 bottom优先
      }
      //fixedTop
      if (pos.top <= offsetTop) {
        onChange && onChange(true);
        this.setState({ showBlob: true, width: pos.width, height: pos.height });
      }
    }
  }
  componentDidMount() {
    // window.addEventListener('mousewheel', this.scroll);
    window.addEventListener("scroll", this.scroll);
  }
  componentWillUnmount() {
    // window.removeEventListener('mousewheel', this.scroll);
    window.removeEventListener("scroll", this.scroll);
  }
  render() {
    return (
      <div style={this.styles()} className={this.className()}>
        <div
          style={this.styles(this.relStyles())}
          className={this.classes()}
          ref={this.affixRef}
        >
          {this.props.children}
        </div>
        {this.state.showBlob && (
          <div style={this.styles(this.blobStyle())} ref={this.blobRef}></div>
        )}
      </div>
    );
  }
}
Affix.defaultProps = {
  offsetTop: 0,
};
Affix.propTypes = {
  onChange: PropTypes.func,
  offsetTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offsetBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
