import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text_value: "",
      option: ""
    };
    this.reflectText = this.reflectText.bind(this);
    this.reflectSelectChange = this.reflectSelectChange.bind(this);
  }

  reflectText(e) {
    this.setState({
      text_value: e.target.value.toUpperCase()
    });
  }
  reflectSelectChange(e) {
    this.setState({
      option: e.target.value
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p>{this.state.text_value}</p>
        <p>{this.state.option}</p>
        <form>
          <input
            value={this.state.value}
            type="text"
            onChange={this.reflectText}
          />
          <select value={this.state.option} onChange={this.reflectSelectChange}>
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;
