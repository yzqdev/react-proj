import React from "react";
import { Route, withRouter } from "react-router-dom";
import { Kui, PropTypes } from "../kui";
class Scroll extends Kui {
  constructor(props) {
    super(props);
    this.state = {
      showHorizontalBar: false,
      showVerticalBar: false,
      viewY: this.props.scrollY || 0,
      barHeight: 0,
      wrapHeight: 0,
      innerHeight: 0,
      barY: 0,
      viewX: this.props.scrollX || 0,
      isReload: false,
      isBarMouseDown: false,
      moveY: 0,
      animaded: false,
      Events: document.createEvent("Events"),
    };

    this.wrapRef = React.createRef();
    this.innerRef = React.createRef();

    this.barMouseMove = this.barMouseMove.bind(this);
    this.barMouseUp = this.barMouseUp.bind(this);
    this.resize = this.resize.bind(this);
    this.mouseOver = this.mouseOver.bind(this);

    this.keyUp = this.keyUp.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.mouseWheel = this.mouseWheel.bind(this);

    // this.barMouseDown = this.barMouseDown.bind(this)
    this.barMouseUp = this.barMouseUp.bind(this);
    this.barMouseMove = this.barMouseMove.bind(this);

    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);

    this.setBar = this.setBar.bind(this);
  }
  barStyles() {
    return { height: `${this.state.barHeight}%`, top: `${this.state.barY}%` };
  }
  viewStyles() {
    return {
      top: `${this.state.viewY}px`,
      transition: !this.state.animaded ? "none" : "",
    };
  }
  componentDidMount() {
    this.setState({ viewY: 0, barY: 0 });
    this.initBar();
    window.addEventListener("mousemove", this.barMouseMove);
    window.addEventListener("mouseup", this.barMouseUp);
    window.addEventListener("resize", this.resize);
    //触发自定义滚动
    // this.setState({ Events: document.createEvent('Events') })
    this.state.Events.initEvent("scroll", false, false);
    window.setScroll = this.setBar;
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.barMouseMove);
    window.removeEventListener("mouseup", this.barMouseUp);
    window.removeEventListener("resize", this.resize);
    window.setScroll = null;
  }
  componentDidUpdate(props) {
    if (
      this.props.target == "window" &&
      this.props.location !== props.location
    ) {
      this.setState({ viewY: 0, barY: 0 }, () => this.initBar());
    }
  }
  resize() {
    this.setState({ animaded: false });
    // this.setBar(0)
    let { wrapHeight, innerHeight, viewY } = this.state;
    if (wrapHeight > innerHeight) return;
    if (wrapHeight - viewY > innerHeight) {
      let viewY = (innerHeight - wrapHeight) * -1;
      let barY = ((viewY * wrapHeight) / innerHeight / wrapHeight) * 100 * -1;
      this.setState({ viewY, barY });
      return;
    }
    if (viewY > 0) {
      this.setState({ viewY: 0, barY: 0 });
      return;
    }
  }
  initBar() {
    let wrapHeight = this.wrapRef.current.offsetHeight;
    let innerHeight = this.innerRef.current.scrollHeight;
    let barHeight = (wrapHeight / innerHeight) * 100;
    let showVerticalBar = wrapHeight < innerHeight;
    let viewY = wrapHeight > innerHeight ? 0 : this.state.viewY;
    this.setState({
      wrapHeight,
      innerHeight,
      barHeight,
      showVerticalBar,
      viewY,
    });
  }
  setWindowScroll(x, y) {
    if (this.props.target == "window") {
      window.scrollX = x;
      window.scrollY = y;
    }
  }
  setBar(moveY, moveX) {
    //todo 横向滚动 还没时间写，
    let { wrapHeight, innerHeight, viewY } = this.state;
    let scrollY = 0;
    if (wrapHeight >= innerHeight) {
      return;
    }

    if (moveY > 0) {
      //向上滚动
      if (
        wrapHeight - viewY > innerHeight ||
        wrapHeight - viewY + moveY > innerHeight
      ) {
        viewY = (innerHeight - wrapHeight) * -1;
        scrollY = ((viewY * wrapHeight) / innerHeight) * -1;
        let barY = (scrollY / wrapHeight) * 100;
        this.setWindowScroll(0, scrollY);
        this.setState({ viewY: viewY, barY: barY });
        return;
      }
    } else {
      //向下滚动
      if (viewY > 0 || viewY - moveY > 0) {
        this.setWindowScroll(0, 0);
        this.setState({ viewY: 0, barY: 0 });
        return;
      }
    }
    viewY -= moveY;
    scrollY = ((viewY * wrapHeight) / innerHeight) * -1;
    this.setWindowScroll(0, scrollY);
    let barY = (scrollY / wrapHeight) * 100; //移动的距离占总距离的百分比计算
    this.setState({ viewY: viewY, barY: barY });
  }
  mouseOver() {
    this.initBar();
  }
  mouseWheel(e) {
    this.setState({ animaded: false });
    this.props.onMouseWheel && this.props.onMouseWheel(e);
    let y = e.deltaY;
    this.setBar(y);
  }
  keyDown(e) {
    // console.log(e)
    // this.animaded = true  //事实上滚动的时候 是有一个动画的， 但是动画有延迟回影响自定义事件的触发，也一并延时了。所以这里干掉了动画
    let code = e.keyCode;
    let move = 0;
    if (code == 38) {
      //up
      move = -50;
    }
    if (code == 40) {
      //down
      move = 50;
    }
    if (code == 32) {
      //space
      move = 500;
    }
    this.setBar(move);
    this.emitEvent(e);
  }
  keyUp() {
    this.setState({ animaded: false });
  }
  barMouseDown(e) {
    this.setState({ isBarMouseDown: true, moveY: e.clientY });
  }
  barMouseUp(e) {
    this.setState({ isBarMouseDown: false });
  }
  barMouseMove(e) {
    if (this.state.isBarMouseDown) {
      this.emitEvent(e);
      let wrapHeight = this.state.wrapHeight;
      let innerHeight = this.state.innerHeight;
      let m = e.clientY - this.state.moveY;
      let move = (innerHeight * m) / (wrapHeight - this.state.barHeight); // 根据移动的距离比 总移动距离 等比计算，得出实际将要移动的距离
      this.setState({ moveY: e.clientY });
      this.setBar(move);
    }
  }
  touchStart(e) {
    this.wrapRef.current.focus();
    this.initBar();
    this.setState({ isBarMouseDown: true, moveY: e.touches[0].clientY });
  }
  touchMove(e) {
    e.preventDefault();
    if (this.state.isBarMouseDown) {
      this.emitEvent(e);
      // let wrapHeight = this.wrapHeight
      // let innerHeight = this.innerHeight
      let m = e.touches[0].clientY - this.state.moveY;
      // let move = innerHeight * m / (wrapHeight - this.barHeight) // 根据移动的距离比 总移动距离 等比计算，得出实际将要移动的距离
      this.setBar(m * -1);
      this.setState({ moveY: e.touches[0].clientY });
    }
  }
  touchEnd(e) {
    this.setState({ isBarMouseDown: false });
  }
  //创建一个滚动条事件，当view 滚动的时候，手动触发滚动条事件
  emitEvent(e) {
    this.props.onMouseWheel && this.props.onMouseWheel(e);
    // if (!this.state.Events) {
    //     this.setState({ Events: document.createEvent('Events') })
    //     this.state.Events.initEvent('scroll', false, false);
    // }
    document.dispatchEvent(this.state.Events);
    window.dispatchEvent(this.state.Events);
  }
  render() {
    let { showVerticalBar, showHorizontalBar } = this.state;
    return (
      <div
        className={this.className(["k-scroll"])}
        tabIndex="0"
        onWheel={this.mouseWheel}
        ref={this.wrapRef}
        onKeyDown={this.keyDown}
        onKeyUp={this.keyUp}
        onMouseMove={this.mouseOver}
      >
        <div
          className="k-scroll-view"
          style={this.viewStyles()}
          ref={this.innerRef}
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
        >
          {this.props.children}
        </div>
        {showVerticalBar && (
          <div
            className="k-scroll-vertical-bar"
            style={this.barStyles()}
            onMouseDown={(e) => this.barMouseDown(e)}
            onMouseUp={this.barMouseUp} /* onMouseMove={this.barMouseMove} */
          ></div>
        )}
        {showHorizontalBar && <div className="k-scroll-horizontal-bar"></div>}
      </div>
    );
  }
}
Scroll.contextTypes = {
  router: PropTypes.object.isRequired,
};
Scroll.defaultProps = {
  scrollX: 0,
  scrollY: 0,
};
Scroll.propTypes = {
  scrollX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  scrollY: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onMouseWheel: PropTypes.func,
  target: PropTypes.string, // 容器对象，
};

export default withRouter(Scroll);
