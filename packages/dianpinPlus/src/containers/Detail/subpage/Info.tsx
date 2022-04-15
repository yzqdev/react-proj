import React, { Component } from "react";

import { getDetail } from "../../../fetch/detail/detail";
import DetailInfo from "../../../components/DetailInfo";

import { InfoData } from "./Data";

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.info ? (
          <DetailInfo data={this.state.info} />
        ) : (
          <div>正在加载...</div>
        )}
      </div>
    );
  }
  componentDidMount() {
    const id = this.props.id;
    const result = getDetail(id);

    result
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("当前id：" + id);
          return InfoData;
        }
      })
      .then((json) => {
        this.setState({
          info: json,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}

export default Info;
