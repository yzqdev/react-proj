import React from "react";
import { Row, Col } from "@/index";
import Demo from "../components/demo";

import code from "../code/grid";
export default function  grid()  {
    return (
      <div className="demo-grid">
        <h2>Layout 栅格</h2>
        <p>
          采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题
        </p>
        <p>两个概念，行row和列col，具体使用方法如下：</p>
        <ul className="k-item-list">
          <li>
            使用
            <code>row</code>在水平方向创建一行
          </li>
          <li>
            将一组
            <code>col</code>插入在
            <code>row</code>中
          </li>
          <li>
            在每个
            <code>col</code>中，键入自己的内容
          </li>
          <li>
            通过设置
            <code>col</code>的<code>span</code>
            参数，指定跨越的范围，其范围是1到24
          </li>
          <li>
            每个
            <code>row</code>中的
            <code>col</code>总和应该为24
          </li>
        </ul>
        <h3>代码示例</h3>
        <Demo title="基础">
          <div>
            <Row>
              <Col span="12">col-12</Col>
              <Col span="12">col-12</Col>
            </Row>
            <Row>
              <Col span="8">col-8</Col>
              <Col span="8">col-8</Col>
              <Col span="8">col-8</Col>
            </Row>
            <Row>
              <Col span="6">col-6</Col>
              <Col span="6">col-6</Col>
              <Col span="6">col-6</Col>
              <Col span="6">col-6</Col>
            </Row>
          </div>
          <div>
            <code>col</code>必须放在
            <code>row</code>里面
          </div>
          <div>{code.base}</div>
        </Demo>
        <Demo title="分栏间隔">
          <div>
            <Row gutter="10" className="pd">
              <Col span="6">
                <div>col-6</div>
              </Col>
              <Col span="6">
                <div>col-6</div>
              </Col>
              <Col span="6">
                <div>col-6</div>
              </Col>
              <Col span="6">
                <div>col-6</div>
              </Col>
            </Row>
          </div>
          <div>
            使用
            <code>gutter</code>熟悉来设置分栏的间隔
          </div>
          <div>{code.gutter}</div>
        </Demo>
        <Demo title="栅格偏移">
          <div>
            <Row>
              <Col span="8">col-8</Col>
              <Col span="8" offset="8">
                col-8 | offset-8
              </Col>
            </Row>
            <Row>
              <Col span="6">col-6</Col>
              <Col span="6" offset="6">
                col-6 | offset-6
              </Col>
              <Col span="6">col-6</Col>
            </Row>
            <Row>
              <Col span="12" offset="12">
                col-12 offset-12
              </Col>
            </Row>
          </div>
          <div>
            通过设置
            <code>offset</code>属性，将列进行左右偏移，偏移栅格数为
            <code>offset</code>的值。
          </div>
          <div>{code.offset}</div>
        </Demo>
        <h3>Row API</h3>
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
                <td>gutter</td>
                <td>栅格间距，单位 px，左右平分</td>
                <td>String,Number</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Col API</h3>
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
                <td>span</td>
                <td>栅格的占位格数，可选值为0~24的整数</td>
                <td>String,Number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>offset</td>
                <td>栅格左侧的间隔格数，可选值为1~24的整数</td>
                <td>String,Number</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}
