import React, { Component } from "react";

import styles from "./style.module.less";

class Face extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles["user-info-face"]} className="clear-fix">
        <div className={styles["face"]}></div>
        <div className={styles["user-info-action"]}>
          <span>登录</span>
          <span>注册</span>
        </div>
      </div>
    );
  }
}

export default Face;
