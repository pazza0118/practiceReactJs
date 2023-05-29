import React from "react";

export default class ClassComponent extends React.Component{
  state = {name:"ken"}
  handleClick = () => {
    const newName = this.state.name + "cool"
    this.setState({name: newName})
  }
  render(){
    return <div>
      Class Component
      <p>{this.state.name}</p>
      <button onClick={this.handleClick}>Make me Cooler!</button>
    </div>
  }
}