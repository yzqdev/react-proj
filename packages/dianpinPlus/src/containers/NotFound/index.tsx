import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "../../actions/app";

class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2 style={{ textAlign: "center" }}>404页面丢失了...</h2>;
  }
  componentDidMount() {
    this.props.appActionList.menu({
      location: -1,
    });
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    appActionList: bindActionCreators(appActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
