import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-70 shrink-0 rounded-4xl overflow-hidden relative'>
    <img className='h-full w-full object-cover rounded-4xl ' src={props.img} alt="" />
    <Rightcardcontent id={props.id} tag={props.tag} />
    </div>
  )
}

export default Rightcard