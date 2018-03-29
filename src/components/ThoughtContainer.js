import React from "react";
import ThoughtCard from "./ThoughtCard";

const ThoughtContainer = props => {
  // console.log(props.thoughts);
  const thought = props.thoughts.map((thought, index) => (
    <ThoughtCard
      thought={thought}
      key={index}
      id={index}
      handleDelete={props.handleDelete}
      handleEditThought={props.handleEditThought}
    />
  ));
  return (
    <div>
      <ul>{thought}</ul>
    </div>
  );
};

export default ThoughtContainer;
