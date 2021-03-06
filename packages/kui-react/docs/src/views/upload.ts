import React from "react";
import { Row, Col, Button, Upload, Message } from "@/index";
import Demo from "../components/demo";
import code from "../code/upload";
export default class upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: code,
      action: "/rest/jcmro-sys-service/fileupload/uploadFile",
      data: { a: 1, b: 2, c: 3 },
    };
  }
  upload() {
    this.refs.upload.submit();
  }
  change(file) {
    Message.info("选择了文件：" + file);
  }
  complite(res) {
    console.log(res);
  }
  render() {
    let { action, data } = this.state;
    return (
      <div>
        <h2>Upload 上传</h2>
        <h3>代码示例</h3>
        <Row gutter="8">
          <Col span="12">
            <Demo title="基础用法" layout="vertical">
              <div>
                <Upload action="/rest/jcmro-sys-service/fileupload/uploadFile">
                  <Button>上传文件</Button>
                </Upload>
              </div>
              <div>
                <code>action</code>配置上传接口路径
              </div>
              <div>{code.base}</div>
            </Demo>
            <Demo title="禁用" layout="vertical">
              <div>
                <Upload action={action} disabled>
                  <Button type="success">上传文件</Button>
                </Upload>
              </div>
              <div>
                <div>
                  设置<code>disabled</code>属性来控制组件是否可用
                </div>
              </div>
              <div>{code.disabled}</div>
            </Demo>
          </Col>
          <Col span="12">
            <Demo title="附带数据上传" layout="vertical">
              <div>
                <Upload
                  action="/rest/jcmro-sys-service/fileupload/uploadFile"
                  onChange={this.change.bind(this)}
                  onComplite={this.complite.bind(this)}
                  data={data}
                >
                  <Button>上传文件</Button>
                </Upload>
              </div>
              <div>
                此操作非多此一举，在ajax上传模式中，除了上传文件外，可能会有其他附加参数一起附带表单提交，传参
                <code>data</code>为 Object
              </div>
              <div>{code.withData}</div>
            </Demo>
            <Demo title="非自动上传模式" layout="vertical">
              <div>
                <Upload
                  action={action}
                  onChange={this.change.bind(this)}
                  onComplite={this.complite.bind(this)}
                  ref="upload"
                  data={data}
                  type="wait"
                >
                  <Button>上传文件</Button>
                </Upload>
                <Button onClick={this.upload.bind(this)}>点我开始上传</Button>
              </div>
              <div>
                通过
                <code>type</code>来控制是否选择文件就提交上传，
                <code>complite</code>
                方法为上传完成成功或失败回调，返回数据取决于接口
                <code>change</code>选择文件触发事件，返回选择的文件名
              </div>
              <div>{code.mode}</div>
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
                <td>action</td>
                <td>上传API地址</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>data</td>
                <td>上传附带参数</td>
                <td>Oject</td>
                <td>{}</td>
              </tr>
              <tr>
                <td>type</td>
                <td>
                  上传类型，可选值为change（选择文件触发上传），wait（选择文件之后，其他事件触发上传）或者不设置
                </td>
                <td>String</td>
                <td>change</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>选择文件之后的回调，返回选中的文件名</td>
                <td>Function</td>
                <td>-</td>
              </tr>
              <tr>
                <td>onComplite</td>
                <td>上传完成之后的回调，返回值取决于api上传接口返回的值 </td>
                <td>Function</td>
                <td>-</td>
              </tr>
              <tr>
                <td>upload</td>
                <td>
                  触发上传事件，此方法配合type=wait，选中文件后 手动提交上传
                </td>
                <td>Function</td>
                <td>-</td>
              </tr>
              <tr>
                <td>onBeforUpload</td>
                <td>开始执行上传之前触发事件</td>
                <td>Function</td>
                <td>-</td>
              </tr>
              <tr>
                <td>onAfterUpload</td>
                <td>上传完成之后触发事件</td>
                <td>Function</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
