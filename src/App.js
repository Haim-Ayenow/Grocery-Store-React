import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Title from "./Components/Title";
import Item from "./Components/Item";

import Add from "./Components/Add";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["apple", "banana", "tomato", "watermelon", "moshe"],
    };
  }

  AddNewVegetable(newItem){
    this.state.list.push(newItem);
    this.setState({ list: this.state.list });
  }

  render() {
    const items = [];

    for (let i = 0; i < this.state.list.length; i++) {
      items.push(<Item name={this.state.list[i]} />);
    }

    return (
      <div className="App">
        <Title />
        {items}
        <Add onAdd={(newItem)=>this.AddNewVegetable(newItem)}  type="vegetable"/>
        <Add onAdd={(newItem)=>this.AddNewVegetable(newItem)}  type="spice"/>
        <Add onAdd={(newItem)=>this.AddNewVegetable(newItem)}  type="cans"/>
      </div>
    );
  }
}

export default App;