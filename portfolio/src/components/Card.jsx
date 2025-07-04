import React from 'react'

const Card = ({ img, title, detail, link, used }) => {
  return (
    <div className='max-w-90 sm:max-w-70 h-auto bg-[#2C2C2C] p-3 rounded-2xl cursor-pointer hover:scale-[1.03] transition-all duration-300 hover:shadow-[#fff] hover:shadow-inner'>
      <figure className='w-full'>
        <img src={img} alt={title} className='w-full object-cover object-center rounded-2xl' />
      </figure>
      <figcaption className='text-center text-[1.07rem] whitespace-nowrap pt-3 pb-3 border-slate-600 mb-3 border-b-2 uppercase'>{title}</figcaption>
      <article>
        <p className='text-justify text-slate-300 text-[0.7rem]'>{detail}</p>
      </article>
      <div className='flex gap-1 justify-center items-center mt-5'>
        {used.map((data, index) => (
          <img src={data} alt="" className='w-9 mix-blend-soft-light hover:mix-blend-normal rounded-full' />
        ))}
      </div>
      <a href={link} className='uppercase text-gray-600 text-center hover:text-gray-400 transition-all duration-200 inline-block w-full mt-3'><small>click for live view</small></a>
    </div>
  )
}

export default Card