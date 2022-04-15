import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import zhCN from "antd/lib/locale/zh_CN";
import "antd/dist/antd.css";
import AppContainer from "./appContainer";

import "./static/css/common.less";
import "./static/css/font.less";
import { ConfigProvider } from "antd";
//解决移动端300毫秒延迟
// var FastClick = require("fastclick");
// FastClick.attach(document.body);

const store = configureStore();

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <HashRouter basename="/">
        <AppContainer />
      </HashRouter>
    </Provider>
  </ConfigProvider>,
  document.getElementById("root")
);
