import Demo from "../components/demo";
import code from "../code/tooltip";
import { Row, Col, Tooltip, Message, Button } from "@/index";
import React from "react";
export default class tooltip extends React.Component {
  ok() {
    Message.info("你点了确定");
  }
  cancel() {
    Message.info("你点了取消");
  }
  render() {
    return (
      <div>
        <h2>Tooltip 文字提示</h2>
        <h3>代码示例</h3>
        <Row gutter="8">
          <Col span="12">
            <Demo title="基本">
              <div>
                <Tooltip content="我是提示内容">
                  <p>鼠标划过，我是一段文字</p>
                </Tooltip>
              </div>
              <div>Tooltip基本使用</div>
              <div>{code.base}</div>
            </Demo>
            <Demo title="多行显示">
              <div>
                <Tooltip
                  content={
                    <div>
                      <p>我独占一行，然后....</p>
                      <p>我独占一行，然后....</p>
                    </div>
                  }
                >
                  <Button>我是个演员</Button>
                </Tooltip>
              </div>
              <div>
                通过
                <code>slot=content</code>来自定义展示内容
              </div>
              <div>{code.slot}</div>
            </Demo>
          </Col>
          <Col span="12">
            <Demo title="位置">
              <div slot="content" style={{ overflow: "hidden" }}>
                <div style={{ marginLeft: "80px", whiteSpace: "nowrap" }}>
                  <Tooltip content="Tooltip的显示内容" placement="top-left">
                    <Button>上左</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip的显示内容" placement="top">
                    <Button>上边</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip的显示内容" placement="top-right">
                    <Button>上右</Button>
                  </Tooltip>
                </div>
                <div style={{ float: "left", height: "150px", width: "80px" }}>
                  <Tooltip content="Tooltip的显示内容" placement="left-top">
                    <Button>左上</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip的显示内容" placement="left">
                    <Button>左边</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip的显示内容" placement="left-bottom">
                    <Button>左下</Button>
                  </Tooltip>
                </div>
                <div
                  style={{
                    marginLeft: "300px",
                    height: "150px",
                    width: "80px",
                  }}
                >
                  <Tooltip content="Tooltip的显示内容" placement="right-top">
                    <Button>右上</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip的显示内容" placement="right">
                    <Button>右边</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip的显示内容" placement="right-bottom">
                    <Button>右下</Button>
                  </Tooltip>
                </div>
                <div style={{ marginLeft: "80px", whiteSpace: "nowrap" }}>
                  <Tooltip content="Tooltip的显示内容" placement="bottom-left">
                    <Button>下左</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip的显示内容" placement="bottom">
                    <Button>下边</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip的显示内容" placement="bottom-right">
                    <Button>下右</Button>
                  </Tooltip>
                </div>
              </div>
              <div>
                <code>Tooltip</code>的位置一共有12种，通过
                <code>placement</code>控制
              </div>
              <div>{code.position}</div>
            </Demo>
          </Col>
        </Row>
        <h3>API</h3>
        <div className="table-border">
          <table>
            <tbody>
              <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
              <tr>
                <td>trigger</td>
                <td>触发方式，可选值为hover（悬停）click（点击）</td>
                <td>String</td>
                <td>hover</td>
              </tr>
              <tr>
                <td>content</td>
                <td>显示的正文内容</td>
                <td>String </td>
                <td>-</td>
              </tr>
              <tr>
                <td>placement</td>
                <td>
                  提示框出现的位置，可选值为top，top-left，top-right，bottom，bottom-left，bottom-right，left，left-top，left-bottom，right，right-top，right-bottom
                </td>
                <td>String </td>
                <td>top</td>
              </tr>
              <tr>
                <td>width</td>
                <td>宽度，最小宽度为 150px</td>
                <td>String，Number </td>
                <td>-</td>
              </tr>
              <tr>
                <td>transfer</td>
                <td>
                  是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table
                  列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
                </td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
