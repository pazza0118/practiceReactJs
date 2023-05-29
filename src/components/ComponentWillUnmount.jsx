import React from "react"

export default class ComponentWillUnmount extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log("childComponentDidMount")
  }
  componentDidUpdate(){
    console.log("childComponentDidUpdate")
  }
  componentWillUnmount(){                 // activates if the component containing the componentWillUnmount() is unmounted
    console.log("childComponentWillUnmount")
  }
  render(){
    return <div>
      <h1>ThisComponentWillBeUnmounted</h1>
    </div>
  }
}