import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Thoughtinput from "./components/ThoughtInput";
import Counter from "./components/Counter";
import ThoughtContainer from "./components/ThoughtContainer";

class App extends Component {
  state = {
    thoughtsArr: []
  };


  addThought = thought => {
    this.setState({ thoughtsArr: [thought, ...this.state.thoughtsArr] });
  };

  deleteThought = thought => {
    // console.log(this.state.thoughtsArr.indexOf(thought))
      let thoughts = [...this.state.thoughtsArr]
      let foundThought = this.state.thoughtsArr.find( thought => thought.id === parseInt(thought))
      let thoughtIndex = this.state.thoughtsArr.indexOf(foundThought)

      thoughts.splice(thoughtIndex, 1)

      this.setState({
        thoughtsArr: thoughts
      })
  }

  editThought = (thought, id) => {
    console.log(thought, id)
    let foundThought = this.state.thoughtsArr.find( thought => thought.id === parseInt(id))
    let thoughtIndex = this.state.thoughtsArr.indexOf(foundThought)

    

  }


  counter = () => {
    return this.state.thoughtsArr.length;
  };

  render() {
    let counter = this.counter();
    return (
      <div>
        <Header />
        <div className="App">
          <Thoughtinput addThought={this.addThought} counter={this.counter} />
          <Counter counter={counter} />
        </div>
        <ThoughtContainer
          thoughts={this.state.thoughtsArr}
          handleDelete={this.deleteThought}
          handleEditThought={this.editThought}
        />
      </div>
    );
  }
}

export default App;
