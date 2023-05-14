import React, { useState } from 'react'

export default function App() {
  const [data, setdata] = useState('Kiran....')
  const [age, setage] = useState(30)
  const [profession, setprofession] = useState('Developer')

  return (
    <div>
      <h1>App,{data}</h1>
      <h1>age={age}</h1>

      <button
        onClick={() => {
          setprofession('Teacher')
        }}>
        content of button
      </button>

      <button
        onClick={() => {
          setage(age + 10)
        }}>
        age btn
      </button>
      <button
        onClick={() => {
          setdata('Something else......')
        }}>
        click
      </button>
    </div>
  )
}
