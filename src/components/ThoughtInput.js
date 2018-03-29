import React from "react";

class Thoughtinput extends React.Component {
  state = {
    input: ""
  };

  handleSubmit = () => {
    if (this.state.input) {
      this.props.addThought(this.state.input);
      this.setState({ input: "" });
      this.props.counter();
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          name="input"
          value={this.state.input}
          className="input"
        />
        <button className="button" onClick={this.handleSubmit}>
          submit
        </button>
      </div>
    );
  }
}

export default Thoughtinput;
