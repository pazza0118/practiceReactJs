import React from "react"


// Basic Use Case of ref attribute
// export default class Ref extends React.Component{
//   constructor(props){
//     super(props)
//     this.someInput = React.createRef()
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick = () => {
//    console.log(this.someInput.current)
//     this.someInput.current.focus()
//   }
//   render(){
//     return <div>
//       <input type="text" ref={this.someInput}></input>
//       <button onClick={this.handleClick}>Click me to focus input</button>
//     </div>
//   }
// }

// Function component cannot be assigned ref attribute because they do not have instances, but can return html elements 
// containing ref attributes

// Common pattern of using ref attributes
// export default class Ref extends React.Component{
//   constructor(props){
//     super(props)
//     this.someInput = null
//     this.setSomeInputRef = element => {
//       this.someInput = element
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick = () => {
//     if(this.someInput){
//       this.someInput.focus()
//     }
//   }
//   render(){
//     return <div>
//       <input type="text" ref={this.setSomeInputRef}></input>
//       <button onClick={this.handleClick}>Click me to focus input</button>
//     </div>
//   }
// }