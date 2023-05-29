import { configureStore } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { combineReducers } from "redux";
import { useEffect } from "react";


// reducer
const ageReducer = (initialState = 10, action) => {
  console.log(`ageReducer, initialState received is ${initialState}, action received is ${action}`)
  switch (action) {
    case "INCREMENT":
      return initialState + 1;
    case "DECREMENT":
      return initialState - 1;
    default:
      return initialState;
  }
};
const nameReducer = (initialState = 'default name', action) => {
  console.log(`nameReducer, initialState received is ${initialState}, action received is ${action}`)
  switch(action){
    case "CHANGENAME":
      return action.payload;
    default:
      return initialState
  }
}

// combine reducer
const rootReducer = combineReducers({ age: ageReducer, name: nameReducer });
// configureStore
export const store = configureStore({reducer: rootReducer})

function mapStateToProps(state) {
  return { 
    name: state.name, 
    age: state.age, 
  };
}
function mapDispatchToProps(dispatch) {
  console.log(`mapDispatchToProps`)
  return {
    changeName: (newName) => dispatch({ type:"CHANGENAME", payload: newName}),
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
}

// component
const PreReduxName = (props) => {
  useEffect(()=>{
    console.log('PreReduxName props')
    console.log(props)
  })
  return <div>
    <p>Name is: {props.name}</p>
    <p>Age is: {props.age}</p>
  </div>;
};
const PreReduxAge = (props) => {
  useEffect(()=>{
    console.log('PreReduxAge props')
    console.log(props)
  })
  return <div>Name is: {props.age}</div>;
};
const PreReduxMovies = (props) => {
  return (
    <div>
      Title is: {props.movie.name}
      Year is: {props.movie.year}
    </div>
  );
};

export const ReduxAge = connect(mapStateToProps, mapDispatchToProps)(PreReduxAge);
export const ReduxName = connect(mapStateToProps, mapDispatchToProps)(PreReduxName);
