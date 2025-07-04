import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import photo from '/src/assets/profile2.png'



const Hero = () => {
  return (
    <>
      <div id='home'>
        <article className="text-center p-6 w-full">
          <TypeAnimation
            sequence={[
              "I'm Rudra Narayan Behera.",
              2000,
            ]}
            wrapper="h1"
            className="text-5xl sm:text-6xl leading-tight py-5"
            cursor={true}
            repeat={Infinity}
          />

          <TypeAnimation
            sequence={[
              "",
              2500,
              "Web Developer and Web Designer.",
            ]}
            wrapper="p"
            className="text-lg text-gray-400 mt-3"
            cursor={true}
            repeat={Infinity}
          />
        </article>
        <figure className='w-full h-screen sm:h-auto'>
          <img src={photo} alt="" className='object-cover object-center w-full h-[80%] brightness-130' />
        </figure>
      </div>
    </>
  )
}

export default Hero