import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }
  update() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  render() {
    this.update();
    return (
      <div>
        <h4>{this.state.time}</h4>
      </div>
    );
  }
}
export default App;
