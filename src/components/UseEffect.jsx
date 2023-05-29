
import React, {useState, useEffect} from "react"

export default function UseEffect(){
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("useEffect")
    document.title = `You clicked ${count} number of times`
    return () => {
      console.log("useEffectNested")  // this gets called on the SECOND useEffect call
    }                                 // if a regular js function has this return console.log(..), it never gets called
  })

  const handleClick = () => {
    setCount(count + 1)
  }

  return <div>
    <p>You clicked {count} times</p>
    <button onClick={handleClick}>Click Me!</button>
  </div>
}
// Equivalent code using lifecycle methods
// export default class UseEffect extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       count:0
//     }
//   }

//   componentDidMount(){
//     document.title = `You clicked ${this.state.count} number of times`
//   }
//   componentDidUpdate(){
//     document.title = `You clicked ${this.state.count} number of times`
//   }
//   handleClick = () => {
//     this.setState({count: this.state.count + 1})
//   }
//   render(){
//     return <div>
//       <p>You clicked ${this.state.count} number of times.</p>
//       <button onClick={this.handleClick}>Click Me!</button>
//     </div>
//   }
// }

