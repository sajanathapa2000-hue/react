import React from 'react'

const Rightcard = () => {
  return (
    <div className='h-full w-70 rounded-4xl overflow-hidden relative'>
    <img className='h-full w-full object-cover rounded-4xl ' src="https://images.unsplash.com/photo-1541560052-5e137f229371?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D" alt="" />
    <div className='absolute top-0 left-0 w-full h-full bg-amber-200 p-9 flex flex-col justify-between'>
        <h2 className='bg-white h-10 w-10 rounded-full flex justify-center items-center font-semi-bold text-2xl'>1</h2>
        <div> 
          <p className='text-lg leading-normal text-white mb-10 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam unde nobis. Possimus, culpa ratione!</p>
           <div className='flex justify-between'>
            <button className='bg-blue-500 text-white font-medium py-2 px-6 rounded-full '>satisfied</button>
            <button className='bg-blue-500 text-white font-medium py-2 px-3 rounded-full '><i className="ri-arrow-right-line"></i></button>
            </div> 
        </div>
        </div> 
    </div>
  )
}

export default Rightcard