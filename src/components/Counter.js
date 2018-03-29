import React from "react";

const Counter = props => {
  return (
    <div>
      <table className="counter">
        <tbody>
          <tr>
            <td>Total:</td>
            <td>{props.counter}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Counter;
