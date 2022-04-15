let code = {};

code.base = `import { Poptip ,Button} from 'react-kui';
ReactDOM.render() {
  return (
    <div>
    <Poptip trigger="hover" title="标题" content="内容">
        <Button>hover激活</Button>
    </Poptip>
    <Poptip trigger="click" title="标题" content="内容">
        <Button>click激活</Button>
    </Poptip>
    </div>
  )
}`;
code.position = `import { Poptip ,Button} from 'react-kui';
ReactDOM.render() {
  return (
    <div>
      <div style={{ marginLeft: '80px', whiteSpace: 'nowrap' }}>
        <Poptip title="标题" content="内容" placement="top-left">
          <Button>上左</Button>
        </Poptip>
        <Poptip title="标题" content="内容" placement="top">
          <Button>上边</Button>
        </Poptip>
        <Poptip title="标题" content="内容" placement="top-right">
          <Button>上右</Button>
        </Poptip>
      </div>
      <div style={{ float: 'left', height: '150px', width: '80px' }}>
        <Poptip title="标题" content="内容" placement="left-top">
          <Button>左上</Button>
        </Poptip>
        <Poptip title="标题" content="内容" placement="left">
          <Button>左边</Button>
        </Poptip>
        <Poptip title="标题" content="内容" placement="left-bottom">
          <Button>左下</Button>
        </Poptip>
      </div>
      <div style={{ marginLeft: '300px', height: '150px', width: '80px' }}>
        <Poptip title="标题" content="内容" placement="right-top">
          <Button>右上</Button>
        </Poptip>
        <Poptip title="标题" content="内容" placement="right">
          <Button>右边</Button>
        </Poptip>
        <Poptip title="标题" content="内容" placement="right-bottom">
          <Button>右下</Button>
        </Poptip>
      </div>
      <div style={{ marginLeft: '80px', whiteSpace: 'nowrap' }}>
        <Poptip title="标题" content="内容" placement="bottom-left">
          <Button>下左</Button>
        </Poptip>
        <Poptip title="标题" content="内容" placement="bottom">
          <Button>下边</Button>
        </Poptip>
        <Poptip title="标题" content="内容" placement="bottom-right">
          <Button>下右</Button>
        </Poptip>
      </div> 
    </div>
  )
}`;
code.slot = `import { Poptip ,Button} from 'react-kui';
ReactDOM.render() {
  let content = (
    <div slot="content" className="k-table k-table-border">
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>住址</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>张山</td>
            <td>13256652545</td>
            <td>广东省深圳市宝安区软件产业基地三诺大厦19楼</td>
          </tr>
          <tr>
            <td>王二</td>
            <td>36254525658</td>
            <td>浙江省杭州市阿里西溪园区3A18楼</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  return (
    <div>
      <Poptip trigger="click" content={content} placement="right-top">
        <Button>Click me</Button>
      </Poptip>  
    </div>
  )
}`;
code.confirm = `import { Poptip ,Button} from 'react-kui';
ok() {
  Message.success('你点了确定')
}
cancel() {
  Message.info('你点了取消')
}
ReactDOM.render() {
  return (
    <div>
      <Poptip confirm title="您确认删除这条内容吗？" onOk={this.ok} onCancel={this.cancel}>
        <Button type="danger">删除</Button>
      </Poptip>
      <Poptip confirm title="Are you OK?" onOk={this.ok} onCancel={this.cancel} okText="yes" cancelText="no">
        <Button>config</Button>
      </Poptip>   
    </div>
  )
}`;

export default code;
