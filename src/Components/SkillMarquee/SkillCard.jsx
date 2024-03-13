import React from 'react'

function SkillCard({imgSrc, text}) {
  return (
    <div className='flex cardEffect overflow-hidden justify-end p-4 border-4 border-black shadow-[0px_0px_10px_5px_#000_inset] hover:shadow-[0px_0px_15px_15px_#7BB2D9] items-center mr-8 w-max hover:scale-125 transition-[hover_transform_color_box-shadow] duration-500 rounded-lg'>
        <div className='flex relative w-max gap-4 object-contain p-4 tablet:p-2 small-tablet:p-1 large-mobile:p-0 flex-col justify-center items-center '>
          <img src={imgSrc} alt=""  className='drop-shadow-[5px_0px_4px_#000] w-20 large-mobile:w-16 mid-mobile:w-14 small-mobile:w-10 aspect-square'/>
          <h1 className='w-full text-center translate-y-16 text-xl drop-shadow-[5px_5px_2px_#000]'>{text.toUpperCase()}</h1>
        </div>
    </div>
  ) 
}

export default SkillCard
