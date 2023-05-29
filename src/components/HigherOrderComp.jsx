
// withNewData is the function that returns hoc component
// 
import React, {useState, useEffect} from "react";


const withNewData = function returnModifiedComponent (OriginalComponent, newData){
  return function(){

    // these are just means to add additional functionality to Original Component
    const [age, setAge] = useState(newData)
    const apiCall = () => {
      //...//
    }
    const sideEffect = () => {
      document.title = `the age is 5`
    }

    // at the end of the day, this return statement with added functionality is what we care about
    return <OriginalComponent data={age} apiCall={apiCall} sideEffect={sideEffect}/>
  }
}

const OriginalComp = (props) => {
  const [user, setUser] = useState({name:"bob"})
  console.log(props)

  useEffect(()=>{
    props.sideEffect()
  })
  return <div>
    <p>I am the original component</p>
    <p>{user.name}</p>
    <p>{props.data.age}</p>
  </div>
}


const age = {age:5}
export const HocComponent = withNewData(OriginalComp, age)