import React from 'react'

export default function Header({ name, age, ceoBoolean, array }) {
  return (
    <div>
      <h1>
        Welcome, {name}, age={age}, is ceo = {ceoBoolean ? 'Yes' : 'No'}
        {JSON.stringify(array)}
      </h1>
    </div>
  )
}
