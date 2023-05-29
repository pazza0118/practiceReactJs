import { useState } from "react"

export const FunctionComponent = ( ) => {
  const [age, setAge] = useState(10)
  const handleClick = () => {
    setAge(age + 1)
  }
  return <div>
    This is Function Component
    <p>The age is: {age}</p>
    <button onClick={handleClick}>Click me to increase age</button>
  </div>
}