import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div  className='h-full  w-3/4 p-4 flex flex-nowrap gap-10'>
        {props.users.map(function(elem, index){
          return <Rightcard key={index} id= {index} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default Rightcontent