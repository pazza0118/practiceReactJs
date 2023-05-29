import { useState } from "react"

export function InputHandler(){
  const [input, setInput] = useState('')
  const [name, setName] = useState('default name')

  const handleChange = (evt) => {
    setInput(evt.target.value)
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setName(input)
    setInput('')
  }
  return <div>
    <p>Name is: {name}</p>
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={handleChange}/>
      <button>Submit</button>
    </form>
  </div>
}