import React, { Component } from "react";

import Item from "./Item";

import styles from "./style.module.less";

class HomeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles["list-container"]}>
        {this.props.data.map((item, index) => {
          return <Item key={index} data={item} />;
        })}
      </div>
    );
  }
}

export default HomeList;
