import React from 'react'

const Rightcardcontent = (props) => {
  return (
   <div className='absolute top-0 left-0 w-full h-full  p-9 flex flex-col justify-between'>
        <h2 className='bg-white h-10 w-10 rounded-full flex justify-center items-center font-semi-bold text-2xl'>{props.id+1}</h2>
        <div> 
          <p className='text-lg leading-normal text-white mb-10 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam unde nobis. Possimus, culpa ratione!</p>
           <div className='flex justify-between'>
            <button className='bg-blue-500 text-white font-medium py-2 px-6 rounded-full '>{props.tag}</button>
            <button className='bg-blue-500 text-white font-medium py-2 px-3 rounded-full '><i className="ri-arrow-right-line"></i></button>
            </div> 
        </div>
        </div> 
  )
}

export default Rightcardcontent