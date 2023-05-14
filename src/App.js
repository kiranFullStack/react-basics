import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Component22 from './Component22'

export default function App() {
  return (
    <div>
      <Header
        name={'Elon Musk...'}
        age={42}
        ceoBoolean={false}
        array={[1, 2, 3, 4]}
      />
      <h1>App</h1>
      <Component22 />

      <Footer somepropdata={'My data'} />
    </div>
  )
}
