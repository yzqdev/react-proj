let code = {};

code.base = `import { Select } from 'react-kui';
const Option = Select.Option
constructor(props) {
  super(props)
  this.state = {
    select: "0",
    data: [
      { label: "θΉζπ", value: 0 },
      { label: "ζ©ε­π", value: 1 },
      { label: "ι¦θπ", value: 2 },
      { label: "ζ ε­π°", value: 3 },
      { label: "θ‘θπ", value: 4 }
    ]
  }
}
onClear() {
  this.setState({ select: '' })
}
onChange(v) {
  this.setState({ select: v })
}
ReactDOM.render() {
  return (
    <div>
      <Select value={this.state.select} onChange={v => this.onChange(v)}>
        {
          this.state.data.map((child, index) => {
            return (<Option key={index} value={child.value}>{child.label}</Option>)
          })
        }
      </Select>
      <Button onClick={this.onClear.bind(this)}>ζΈι€</Button>
      <Button onClick={() => this.onChange('select', '1')}>ιδΈ­ζ©ε­</Button>
    </div>
  )
}`;

code.size = `import { Select } from 'react-kui';
const Option = Select.Option
constructor(props) {
  super(props)
  this.state = {
    select1: 1,
    data: [
      { label: "θΉζπ", value: 0 },
      { label: "ζ©ε­π", value: 1 },
      { label: "ι¦θπ", value: 2 },
      { label: "ζ ε­π°", value: 3 },
      { label: "θ‘θπ", value: 4 }
    ]
  }
}
ReactDOM.render() {
  return (
    <div>
        <Select value={this.state.select1} width="200">
              return (<Option key={index} value={child.value}>{child.label}</Option>)
        </Select>
        <Select value={this.state.select1} mini width="200">
          {
            this.state.data.map((child, index) => {
              return (<Option key={index} value={child.value}>{child.label}</Option>)
            })
          }
        </Select>
    </div>
  )
}`;

code.clearable = `import { Select } from 'react-kui';
constructor(props) {
  super(props)
  this.state = {
    select1: 1,
    data: [
      { label: "θΉζπ", value: 0 },
      { label: "ζ©ε­π", value: 1 },
      { label: "ι¦θπ", value: 2 },
      { label: "ζ ε­π°", value: 3 },
      { label: "θ‘θπ", value: 4 }
    ]
  }
}
ReactDOM.render() {
  return (
    <div>
        <Select value={this.state.select1} clearable>
              return (<Option key={index} value={child.value}>{child.label}</Option>)
        </Select>
        <Select value={this.state.select1} mini  clearable>
          {
            this.state.data.map((child, index) => {
              return (<Option key={index} value={child.value}>{child.label}</Option>)
            })
          }
        </Select>
    </div>
  )
}`;

code.search = `import { Select } from 'react-kui';
ReactDOM.render() {
  return (
    <div>

    </div>
  )
}`;

code.disabled = `import { Input } from 'react-kui';
constructor(props) {
  super(props)
  this.state = {
    select: "4", 
    data: [
      { label: "θΉζπ", value: 0 },
      { label: "ζ©ε­π", value: 1 },
      { label: "ι¦θπ", value: 2 },
      { label: "ζ ε­π°", value: 3 },
      { label: "θ‘θπ", value: 4 }
    ]
  }
}
ReactDOM.render() {
  return (
    <div>
      <Select disabled></Select>
      <Select value={this.state.select} onChange={v => this.onChange('select4', v)}>
        {
          this.state.data.map((child, index) => {
            return (<Option key={index} value={child.value} disabled={index == 3}>{child.label}</Option>)
          })
        }
      </Select>
    </div>
  )
}`;

export default code;
