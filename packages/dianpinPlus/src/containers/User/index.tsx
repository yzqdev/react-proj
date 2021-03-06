import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "../../actions/app";

import Face from "./subpage/face";
import styles from "./style.module.less";

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles["user-info"]}>
        <Face />
        <div style={{ height: "15px" }}></div>
      </div>
    );
  }
  componentDidMount() {
    this.props.appActionList.menu({
      location: 4,
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

export default connect(mapStateToProps, mapDispatchToProps)(User);
