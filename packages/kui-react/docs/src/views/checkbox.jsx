import React, { Component, useState } from "react";
import { Checkbox, Button, CheckboxGroup } from "@/index";
import Demo from "../components/demo";

import code from "../code/checkbox";
export default function checkbox() {
  const [checked, setChecked] = useState(true);
  const [data, setData] = useState(["苹果🍎", "香蕉🍌", "葡萄🍇"]);
  let [checkAll, setCheckAll] = useState(false);
  //不知道
  let [indeterminate, setIndeterminate] = useState(false);
  const [check, setCheck] = useState([]);
  function toggleCheck() {
    setChecked(!checked);
  }
  function onChange(e) {
    setChecked(e);
  }
  function onClear() {
    setData([]);
  }
  function onSelect() {
    setData(["苹果🍎"]);
  }
  function onChangeGroup(opt) {
    setData(opt);
  }
  function handleCheck(data) {
    if (data.length === 4) {
      indeterminate = false;
      checkAll = true;
    } else if (data.length > 0) {
      indeterminate = true;
      checkAll = false;
    } else {
      indeterminate = false;
      checkAll = false;
    }
    setCheckAll(checkAll);
    setIndeterminate(indeterminate);
  }
  function handleCheckAll(v) {
    console.log(indeterminate, checkAll, check, "fhi");


    if (indeterminate) {
      setCheckAll(false)
      checkAll=false
      indeterminate=!indeterminate
    } else {
      console.log('jinlai')
      setCheckAll(true)
      checkAll=true
      indeterminate=!indeterminate
    }


    if (checkAll) {
      setCheck(["苹果🍎", "香蕉🍌", "葡萄🍇", "栗子🌰"]);
    } else {
      setCheck([]);
    }
  }
  return (
    <div>
      <h2>Checkbox 多选框</h2>
      <h3>代码示例 </h3>
      <Demo title="基础用法">
        <div>
          <p>{checked}</p>
          <Checkbox checked={checked} onChange={onChange}>
            单选框{" "}
          </Checkbox>
          <Button onClick={toggleCheck}>Click me</Button>
        </div>
        <div>
          单独使用 ,使用
          <code>checked</code> 切换选中状态
        </div>
        <div>{code.base}</div>
      </Demo>
      <Demo title="组合使用">
        <div>
          {data.toString()}
          <br />
          <Checkbox.Group value={data} onChange={onChangeGroup}>
            <Checkbox label="苹果🍎"></Checkbox>
            <Checkbox label="橘子🍊"></Checkbox>
            <Checkbox label="香蕉🍌"></Checkbox>
            <Checkbox label="栗子🌰"></Checkbox>
            <Checkbox label="葡萄🍇" disabled></Checkbox>
            <Checkbox label="梨子🍐" disabled></Checkbox>
          </Checkbox.Group>
          <Button onClick={onClear}>清除</Button>
          <Button onClick={onSelect}>选中苹果</Button>
        </div>
        <div>
          结合
          <code>CheckboxGroup</code>来组合使用,通过
          <code>disabled</code>可以设置组件是否被禁用
        </div>
        <div>{code.group}</div>
      </Demo>
      {
        <Demo title="全选">
          <div>
            <Checkbox

              checked={checkAll}
              indeterminate={indeterminate}
              onChange={handleCheckAll}
            >
              全选
            </Checkbox>
            <br />
            <Checkbox.Group value={check} onChange={handleCheck}>
              <Checkbox label="苹果🍎"></Checkbox>
              <Checkbox label="葡萄🍇"></Checkbox>
              <Checkbox label="香蕉🍌"></Checkbox>
              <Checkbox label="栗子🌰"></Checkbox>
            </Checkbox.Group>
          </div>
          <div>全选组合</div>
          <div>{code.checkAll}</div>
        </Demo>
      }
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
              <td>checked</td>
              <td>当前是否勾选</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>label</td>
              <td>
                只在组合使用时有效。指定当前选项的 value
                值，组合会自动判断当前选择的项目
              </td>
              <td> String | Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用当前项</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>在选项状态发生改变时触发，返回当前状态</td>
              <td>Function</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>CheckboxGroup API</h3>
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
              <td>value</td>
              <td>多选组当前取值</td>
              <td>string</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用当前项</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>在选项状态发生改变时触发，返回当前选中的项</td>
              <td>Function</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
