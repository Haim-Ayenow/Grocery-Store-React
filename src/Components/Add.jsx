import React from "react";

class Add extends React.Component {
    constructor() {
      super();
      this.state = { newItem: "" };
    }
    render() {
      return (
        <div>
            <span>new {this.props.type} : </span>
          <input
            type="text"
            value={this.state.newItem}
            onChange={(event) => {
              console.log(event.target.value);
              this.setState({ newItem: event.target.value });
            }}
          />
          <button onClick={() => this.props.onAdd(this.state.newItem)}>add</button>
        </div>
      );
    }
  }
  
  export default Add;