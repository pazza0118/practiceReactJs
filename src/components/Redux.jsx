import React, {useEffect, useState} from "react";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { connect, useDispatch } from "react-redux";

// Action
const counterAction = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    handleSubmit: (name) => dispatch({ type: "HANDLESUBMIT", payload: name})  
  }
}

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(`increment, state = ${state}, action = ${action}`);
      return state + 1;
    case "DECREMENT":
      console.log(`decrement, state = ${state}, action = ${action}`);
      return state - 1;
    default:
      console.log(`default case, state = ${state}, action = ${action}`);
      return state;
  }
};
const nameReducer = (state = 'defaultName', action) => {
  switch (action.type) {
    case "HANDLESUBMIT":
      return action.payload
    default:
      console.log(`default case, state = ${state}, action = ${action}`);
      return state;
  }
}
const rootReducer = combineReducers({ 
  counter: counterReducer,
  name: nameReducer
});


// Store
export const store = configureStore({ reducer: rootReducer });





// Class and Function components below are more or less the same (function has input tag tho)

// Function Component
function PreReduxFunction(props) {
  const dispatch = useDispatch()

  const increment = () => {
    console.log(props);
    props.increment();
  };
  const decrement = () => {
    console.log(props);
    props.decrement();
  };

  const [input, setInput] = useState('')
  const [name, setName] = useState('default name')
  const handleChange = (evt) => {
    setInput(evt.target.value)
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    setName(input)
    // props.handleSubmit(evt.target.value)
    console.log("evt.target.value")
    console.log(input)
    props.handleSubmit(input)
    // dispatch({type:"HANDLESUBMIT", payload: input})
  }
  useEffect(()=>{
    console.log("useEffect")
    console.log(props)
  })
  return (
    <div>
      <h1>Function React-Redux Component</h1>
      <p>Local State input is {input}</p>
      <p>Local State name is {name}</p>
      <p>Redux State name is {props.data.name}</p>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} type="text" />
        <button type="submit">Submit</button>
      </form>

      <p>Count is: {props.data.counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// Class Component
class PreReduxClass extends React.Component {
  constructor(props){
    super(props);
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment = () => {
    console.log(this.props)
    this.props.increment()
  };
  decrement = () => {
    console.log(this.props)
    this.props.decrement()
  };
  render() {
    return (
      <div>
        <h1>Class React-Redux Component</h1>
        <p>Count is: {this.props.data.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}




// Wrap components
const mapStateToProps = (state) => {
  console.log("mapStateToProps");
  console.log(state)
  return { data: state };
};
const mapDispatchToProps = (dispatch) => {
  // console.log("mapDispatchToProps");
  return counterAction(dispatch)
};
export const ReduxClass = connect(mapStateToProps, mapDispatchToProps)(PreReduxClass);
export const ReduxFunction = connect(mapStateToProps, mapDispatchToProps)(PreReduxFunction);



