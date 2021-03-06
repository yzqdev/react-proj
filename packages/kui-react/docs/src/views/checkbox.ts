import React, { Component, useState } from "react";
import { Checkbox, Button, CheckboxGroup } from "@/index";
import Demo from "../components/demo";

import code from "../code/checkbox";
export default function checkbox() {
  const [checked, setChecked] = useState(true);
  const [data, setData] = useState(["θΉζπ", "ι¦θπ", "θ‘θπ"]);
  let [checkAll, setCheckAll] = useState(false);
  //δΈη₯ι
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
    setData(["θΉζπ"]);
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
      setCheck(["θΉζπ", "ι¦θπ", "θ‘θπ", "ζ ε­π°"]);
    } else {
      setCheck([]);
    }
  }
  return (
    <div>
      <h2>Checkbox ε€ιζ‘</h2>
      <h3>δ»£η η€ΊδΎ </h3>
      <Demo title="εΊη‘η¨ζ³">
        <div>
          <p>{checked}</p>
          <Checkbox checked={checked} onChange={onChange}>
            ειζ‘{" "}
          </Checkbox>
          <Button onClick={toggleCheck}>Click me</Button>
        </div>
        <div>
          εη¬δ½Ώη¨ ,δ½Ώη¨
          <code>checked</code> εζ’ιδΈ­ηΆζ
        </div>
        <div>{code.base}</div>
      </Demo>
      <Demo title="η»εδ½Ώη¨">
        <div>
          {data.toString()}
          <br />
          <Checkbox.Group value={data} onChange={onChangeGroup}>
            <Checkbox label="θΉζπ"></Checkbox>
            <Checkbox label="ζ©ε­π"></Checkbox>
            <Checkbox label="ι¦θπ"></Checkbox>
            <Checkbox label="ζ ε­π°"></Checkbox>
            <Checkbox label="θ‘θπ" disabled></Checkbox>
            <Checkbox label="ζ’¨ε­π" disabled></Checkbox>
          </Checkbox.Group>
          <Button onClick={onClear}>ζΈι€</Button>
          <Button onClick={onSelect}>ιδΈ­θΉζ</Button>
        </div>
        <div>
          η»ε
          <code>CheckboxGroup</code>ζ₯η»εδ½Ώη¨,ιθΏ
          <code>disabled</code>ε―δ»₯θ?Ύη½?η»δ»Άζ―ε¦θ’«η¦η¨
        </div>
        <div>{code.group}</div>
      </Demo>
      {
        <Demo title="ε¨ι">
          <div>
            <Checkbox

              checked={checkAll}
              indeterminate={indeterminate}
              onChange={handleCheckAll}
            >
              ε¨ι
            </Checkbox>
            <br />
            <Checkbox.Group value={check} onChange={handleCheck}>
              <Checkbox label="θΉζπ"></Checkbox>
              <Checkbox label="θ‘θπ"></Checkbox>
              <Checkbox label="ι¦θπ"></Checkbox>
              <Checkbox label="ζ ε­π°"></Checkbox>
            </Checkbox.Group>
          </div>
          <div>ε¨ιη»ε</div>
          <div>{code.checkAll}</div>
        </Demo>
      }
      <h3>API</h3>
      <div className="table-border">
        <table>
          <tbody>
            <tr>
              <th>ε±ζ§</th>
              <th>θ―΄ζ</th>
              <th>η±»ε</th>
              <th>ι»θ?€εΌ</th>
            </tr>
            <tr>
              <td>checked</td>
              <td>ε½εζ―ε¦εΎι</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>label</td>
              <td>
                εͺε¨η»εδ½Ώη¨ζΆζζγζε?ε½ειι‘Ήη value
                εΌοΌη»εδΌθͺε¨ε€ζ­ε½ειζ©ηι‘Ήη?
              </td>
              <td> String | Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>ζ―ε¦η¦η¨ε½ει‘Ή</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>ε¨ιι‘ΉηΆζεηζΉεζΆθ§¦εοΌθΏεε½εηΆζ</td>
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
              <th>ε±ζ§</th>
              <th>θ―΄ζ</th>
              <th>η±»ε</th>
              <th>ι»θ?€εΌ</th>
            </tr>
            <tr>
              <td>value</td>
              <td>ε€ιη»ε½εεεΌ</td>
              <td>string</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>ζ―ε¦η¦η¨ε½ει‘Ή</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>ε¨ιι‘ΉηΆζεηζΉεζΆθ§¦εοΌθΏεε½ειδΈ­ηι‘Ή</td>
              <td>Function</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
