import { useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {
 
    const watches =[
      {id:1, name: 'Apple Watch', price: 200},
      {id:2, name: 'Samsung Watch', price: 100},
      {id:3, name: 'MI Watch', price: 50},
    ]

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch=> <Watch key={watch.id} watch={watch}></Watch>)
      }
      
    </>
  )
}

export default App
