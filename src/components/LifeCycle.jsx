import React from "react"
import ComponentWillUnmount from "./ComponentWillUnmount"

export default class LifeCycle extends React.Component{
  constructor(props){
    super(props)
    this.state = {display : true};
  }
  handleClick = () => {
    console.log("handleClick")
    this.setState({display: !this.state.display})
  }
  renderComp = () => {
    console.log("renderComp")
    if(this.state.display){
      return <ComponentWillUnmount />
    }
    return <div>The component has been unmounted</div>
  }
  componentDidMount(){
    console.log("parentComponentDidMount")
  }
  componentDidUpdate(){
    console.log("parentComponentDidUpdate")
  }
  componentWillUnmount(){                       // activates if the component containing the componentWillUnmount() is unmounted
    console.log("parentComponentWillUnmount")   
  }
  render(){
    return <div>
      <p>Below this line should be the component "ThisComponentWillBeUnmounted"</p>
      {this.renderComp()}
      <button onClick={this.handleClick}>Unmount/Mount the component "ThisComponentWillBeUnmounted"</button>
    </div>
  }
}