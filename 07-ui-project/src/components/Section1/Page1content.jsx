import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='px-13 py-10 flex gap-12 items-center h-[90vh]'>
    <Leftcontent />
    <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1content