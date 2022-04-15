import React, { Component } from "react";

import styles from "./style.module.less";

class CurrentCity extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={styles["current-city"]}>{this.props.cityName}</div>;
  }
}

export default CurrentCity;
