import React from "react";

class ThoughtCard extends React.Component {
  state = {
    input: "",
    isEditing: false
  };

  handleEdit = () => {
    this.setState({  isEditing: !this.state.isEditing  });
  };

  // handleSubmit = () => {
  //   if (this.state.input) {
  //     this.props.addThought(this.state.input);
  //     this.setState({ input: "" });
  //     this.props.counter();
  //   }
  // };

  handleText = event => {
    this.props.handleEditThought(event.target.value, event.target.id)
    // this.setState(
    //   {
    //     input: e.target.value
    //   }
      // console.log(e.target)
    // );
  };


  deleteThought = event => {
    // console.log(event.target.id)
    this.props.handleDelete(event.target.id)
  };

  render() {
    return (
      <li className="container">
       <h3>{this.props.thought}</h3>
         {this.state.isEditing ? (
           <div>
             <textarea type="text" onChange={this.handleText} id={this.props.id}>
               {this.props.thought}
             </textarea>
           </div>
         ) : null}
        <button
          onClick={this.handleEdit}
          id={this.props.id}
        >
          edit
        </button>
        <button onClick={this.deleteThought} id={this.props.id}>delete</button>
      </li>
    );
  }
}

export default ThoughtCard;
