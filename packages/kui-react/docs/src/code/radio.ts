let code = {};

code.base = `import { Radio } from 'react-kui';
constructor(props) {
  super(props)
  this.state = {
    checked: false,
  }
}
testChange(value) {
  this.setState({ checked: value })
}
testClick() {
  this.setState({ checked: !this.state.checked })
}
ReactDOM.render() {
  return (
    <div>
      <Radio checked={this.state.checked} onChange={this.testChange.bind(this)} value="1">ει</Radio>
      <Button onClick={this.testClick.bind(this)} >Click me</Button>
    </div>
  )
}`;

code.disabled = `import { Radio } from 'react-kui';
ReactDOM.render() {
  return (
    <div>
      <Radio label="θ‘θπ" disabled checked></Radio>
      <Radio label="ζ’¨ε­π" disabled></Radio>
    </div>
  )
}`;
code.group = `import { Radio } from 'react-kui';
constructor(props) {
  super(props)
  this.state = {
    value: "3",
  }
}
onClear() {
  this.setState({ value: '' })
}
onSelect() {
  this.setState({ value: '0' })
}
onChangeGroup(value) {
  this.setState({ value })
}
ReactDOM.render() {
  return (
    <div>
      <Radio.Group value={this.state.value} onChange={this.onChangeGroup.bind(this)}>
        <Radio value="0" label="θΉζπ"></Radio>
        <Radio value="1" label="ζ©ε­π"></Radio>
        <Radio value="2" label="ι¦θπ"></Radio>
        <Radio value="3" label="ζ ε­π°"></Radio>
        <Radio value="4" label="θ‘θπ"></Radio>
        <Radio value="5" label="ζ’¨ε­π" disabled></Radio>
      </Radio.Group>
      <Button onClick={this.onClear.bind(this)}>ζΈι€</Button>
      <Button onClick={this.onSelect.bind(this)}> ιδΈ­θΉζ</Button >
    </div>
  )
}`;

code.groupButton = `import { Radio } from 'react-kui';
constructor(props) {
  super(props)
  this.state = {
    value1: "0",
    value2: "0",
    value3: "0",
  }
}
onChangeGroup(key, value) {
  let data = {}
  data[key] = value
  this.setState(data)
}
ReactDOM.render() {
  return (
    <div>
      <Radio.Group value={this.state.value1} onChange={this.onChangeGroup.bind(this, 'value1')}>
        <Radio.Button value="0" label="θΉζ"></Radio.Button>
        <Radio.Button value="1" label="ζ©ε­"></Radio.Button>
        <Radio.Button value="2" label="ι¦θ"></Radio.Button>
        <Radio.Button value="3" label="ζ ε­"></Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Radio.Group value={this.state.value2} onChange={this.onChangeGroup.bind(this, 'value2')} mini>
        <Radio.Button value="0" label="θΉζ"></Radio.Button>
        <Radio.Button value="1" label="ζ©ε­" disabled></Radio.Button>
        <Radio.Button value="2" label="ι¦θ"></Radio.Button>
        <Radio.Button value="3" label="ζ ε­"></Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Radio.Group value={this.state.value3} onChange={this.onChangeGroup.bind(this, 'value3')} mini disabled>
        <Radio.Button value="0" label="θΉζ"></Radio.Button>
        <Radio.Button value="1" label="ζ©ε­" ></Radio.Button>
        <Radio.Button value="2" label="ι¦θ"></Radio.Button>
        <Radio.Button value="3" label="ζ ε­"></Radio.Button>
      </Radio.Group>
    </div>
  )
}`;
export default code;
