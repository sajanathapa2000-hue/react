import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const user=[
  {
    img:'https://images.unsplash.com/photo-1541560052-5e137f229371?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
    intro:'',
    tag:'Satisfied'
  },

  {
    img:'https://images.unsplash.com/photo-1752170080622-18196de87763?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
    intro:'',
    tag:'Underserved'
  },

  {
    img:'https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'Underbanked'
  }
]


const App = () => {
  return (
    <div>
      <Section1 users={user} />
      <Section2 users={user} />
    </div>
  )
}

export default App