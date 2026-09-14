import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = () => {
  return (
    <div className='px-13 py-10 flex gap-12 items-center bg-amber-950 h-[90vh]'>
    <Leftcontent />
    <Rightcontent />
    </div>
  )
}

export default Page1content