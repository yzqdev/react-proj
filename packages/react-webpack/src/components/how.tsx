import React, { Component } from "react";
import {Button} from 'antd'
function How() {
  return (
    <div>
      <h3>How to Use it</h3>
      <pre>git clone https://github.com/JackPu/yarn-react-webpack-seed</pre>
      <Button >点击</Button>
      <p>
        Then you could use <code>yarn install</code>
      </p>
      <i>
        Of course <code>npm install</code> does the same thinkg
      </i>
    </div>
  );
}

export default How;
