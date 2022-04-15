import React from "react";

import Star from "../../Star";

import styles from "./style.module.less";

class CommentItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    // 获取数据
    const item = this.props.data;

    return (
      <div className={styles["comment-item"]}>
        <h3>
          <i className="icon-user"></i>
          &nbsp;
          {item.username}
        </h3>
        <Star star={item.star} />
        <p>{item.comment}</p>
      </div>
    );
  }
}

export default CommentItem;
