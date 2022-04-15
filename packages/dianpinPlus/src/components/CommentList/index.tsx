import React from "react";

import Item from "./Item";

import styles from "./style.module.less";

class CommentList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    // 获取数据
    const data = this.props.data;

    return (
      <div className={styles["comment-list"]}>
        {data.map((item, index) => {
          return <Item key={index} data={item} />;
        })}
      </div>
    );
  }
}

export default CommentList;
