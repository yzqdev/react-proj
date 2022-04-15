import React, { Component } from "react";

import SearchInput from "../SearchInput";
import styles from "./style.module.less";

class SearchHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles["search-header"]} className="clear-fix">
        <span
          className={styles["back-icon"] + " float-left"}
          onClick={this.clickHandle.bind(this)}
        >
          <i className="icon-chevron-left"></i>
        </span>
        <SearchInput
          value={this.props.keyword}
          enterHandle={this.enterHandle.bind(this)}
        />
      </div>
    );
  }
  clickHandle() {
    window.history.back();
  }
  enterHandle(value) {
    this.props.history.push("/search/all/" + encodeURIComponent(value));
  }
}

export default SearchHeader;
