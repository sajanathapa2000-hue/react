import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div>
      <div className="parent">

    <Card user="alice" age={25} img="https://images.unsplash.com/photo-1788195430420-f3dd75a9a767?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjR8fHxlbnwwfHx8fHw%3D"/>
    <Card user="bob" age={30} img="https://images.unsplash.com/photo-1773332598289-ed0444ad1d6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNDB8fHxlbnwwfHx8fHw%3D"/>

     </div>

    </div>
  )
}

export default App
