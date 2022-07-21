import React from "react";
import { Button, Table, Poptip } from "@/index";
import code from "../code/table";
import Demo from "../components/demo";

export default class table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      border: false,
      mini: false,
      data: [
        { nick: "毛毛", gender: "右对其", birthday: "2018-1-1", action: "" },
        { nick: "高总", gender: "右对其", birthday: "2018-1-1", action: "" },
        { nick: "娟娟", gender: "右对其", birthday: "2018-1-1", action: "" },
        { nick: "鱼雷", gender: "右对其", birthday: "2018-1-1", action: "" },
      ],
      col: [
        { type: "selection" },
        { title: "姓名", key: "nick" },
        { title: "文字右对其", key: "gender", textAlign: "right" },
        { title: "姓名", key: "nick" },
        { title: "文字对其", key: "gender", textAlign: "center" },
        { title: "姓名", key: "nick" },
        { title: "文字对其", key: "gender", textAlign: "right" },
        {
          title: "出生年月",
          key: "birthday",
        },
        {
          title: "操作",
          key: "action",
          render: (item, index) => {
            return (
              <Poptip
                confirm
                title="是否删除数据？"
                placement="left-bottom"
                onOk={() => {
                  let data = this.state.data.splice(index, 1);
                  this.setState(data);
                }}
              >
                <Button mini type="danger">
                  删除
                </Button>
              </Poptip>
            );
          },
        },
      ],
      row: [],
    };
  }
  select(row) {
    this.row = row;
    console.log("当前选中：", row);
  }
  render() {
    let { bordered, mini, data, col } = this.state;
    return (
      <div>
        <h2>Table 表格</h2>
        <h3>代码示例</h3>
        <Demo title="基础／组件嵌套" layout="vertical">
          <div>
            <Button
              onClick={() => this.setState({ bordered: !bordered })}
              type="primary"
            >
              表格边框
            </Button>
            <Button
              onClick={() => this.setState({ mini: !mini })}
              type="primary"
            >
              mini
            </Button>
            <Table
              data={data}
              columns={col}
              mini={mini}
              onSelection={this.select.bind(this)}
              bordered={bordered}
            ></Table>
          </div>
          <div>
            表格没做太复杂的展示，通过
            <code>border</code>可以设置是否有边框，
            <code>mini</code>来设置表格mini模式
          </div>
          <div>{code.base}</div>
        </Demo>
        <h3>Table API</h3>
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
                <td>bordered</td>
                <td>是否显示边框</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>mini</td>
                <td>表格是否为mini模式</td>
                <td>Boolean </td>
                <td>false</td>
              </tr>
              <tr>
                <td>data</td>
                <td>显示的结构化数据</td>
                <td>Array</td>
                <td>[ ]</td>
              </tr>
              <tr>
                <td>columns</td>
                <td>表格列的配置描述，</td>
                <td>Array</td>
                <td>[ ]</td>
              </tr>
              <tr>
                <td>noDataText</td>
                <td>数据为空时显示的提示内容</td>
                <td>String </td>
                <td>暂无数据</td>
              </tr>
              <tr>
                <td>onSelection</td>
                <td>
                  多选或单选触发，多选：返回当前所有已经选择的项
                  <br />
                  单选：返回所有勾选和 当前选择单项{" "}
                </td>
                <td>Function</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Column API</h3>
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
                <td>type</td>
                <td>列类型，可选值为 selection、html</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>title</td>
                <td>列头显示文字</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>textAlign</td>
                <td>列文字对其方式 ，可选值left，center，right</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>key</td>
                <td>对应列内容的字段名</td>
                <td>String </td>
                <td>-</td>
              </tr>
              <tr>
                <td>width</td>
                <td>列宽</td>
                <td>Number </td>
                <td>-</td>
              </tr>
              <tr>
                <td>render</td>
                <td>
                  自定义渲染列， 传入两个参数，第一个是
                  item,当前数据列项，第二个是当前行索引
                </td>
                <td>Function </td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
