import React, { Component } from "react";
import { Button } from "@/index";
import logo from "../assets/favicon.png";
import {useHistory} from "react-router-dom";
export default function Index(props) {
  let history=useHistory()
 function start() {
   console.log(props,'收款方')
      history.push("/start");
  }
  function gotoIndex(){
    history.push('/')
  }
    return (
      <section className="index">
        <header className="header">
          <div className="nav">
            <div className="nav-left">
              <div className="logo">
                <a href="/" onClick={gotoIndex} >
                  <img src={logo} alt="K UIKIT" />
                  <span>K UIKIT</span>
                </a>
              </div>
            </div>
            <div className="nav-right">
              <ul>
                <li>
                  <a href="/" onClick={gotoIndex}  >首页</a>{" "}
                </li>
                <li>
                  <a href="" onClick={props.history.push('/start')} >组件</a>{" "}
                </li>
                <li>
                  <a href="https://vue.k-ui.cn" target="_blank">
                    KUI VUE
                  </a>
                </li>
                <li>
                  <a href="https://gitee.com/chuchur/kui-react" target="_blank">
                    GITEE
                  </a>
                </li>
                <li>
                  <a href="https://chuchur.com" target="_blank">
                    BLOG
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <section className="index-content">
          <div className="logo">K UI</div>
          <h1>一枚高质量前端UI组件库</h1>
          <div className="btn-content">
            <Button className="start" onClick={start}>
              开始使用
            </Button>
            <Button icon="ios-cloud" className="github">
              <a href="https://gitee.com/chuchur/kui-react" target="_blank">
                Gitee
              </a>
            </Button>
          </div>
        </section>
      </section>
    );
}
