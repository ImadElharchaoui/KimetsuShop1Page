import React from 'react'


export const CardItem = ({Image , title , quantity , price}) => {
  return (
    <div className='relative p-2 m-2 bg-opacity-30 bg-black rounded-lg '>
        <img className='h-[200px] w-[200px]' src={Image} alt='image' />
        <div>
            <p className='truncate w-[200px]'>{title}</p>
            <p className=' absolute top-3 left-3 text-white bg-black rounded-full px-1'>{quantity}</p>
            <p className=' text-right'>{price}</p>
        </div>
    </div>
  )
}
