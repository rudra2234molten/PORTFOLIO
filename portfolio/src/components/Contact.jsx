import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


const contactArray = [{ icon: <FaLocationDot />, title: 'Hyderabad,India' }, { icon: <FaPhoneAlt />, title: '+91-9348894744' }, { icon: <HiMail />, title: 'rb645228@gmail.com' },]

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className='w-full p-10 sm:mt-10' id='contact'>
        <h1 className='text-4xl border-b-2 inline-block py-4 border-b-gray-500'>Contact Me</h1>
        <article className='flex flex-col gap-5 mt-6'>
          {contactArray.map((data, index) => (
            <div key={index} className='flex gap-4 items-end'><span className='sm:text-4xl text-2xl'>{data.icon}</span> <span className='text-[#757575] text-[1rem]'>{data.title}</span></div>
          ))}
        </article>
        <form
          className="flex flex-col gap-4 mt-8 w-full"
          action="https://formspree.io/f/mqabkaly"
          method="POST"
        >
          <h1 className='text-[#757575]'>Let's get in touch. Send me a message:</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-4 border bg-white text-black placeholder:text-[1.1rem] w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-4 border bg-white text-black placeholder:text-[1.1rem] w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-4 border bg-white text-black placeholder:text-[1.1rem] w-full"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={5}
            className="p-4 border bg-white text-black placeholder:text-[1.1rem] w-full"
          />
          <button
            type="submit"
            className="bg-white text-black py-2.5 px-4 hover:bg-slate-200 transition cursor-pointer flex justify-center items-center gap-2 w-50"
          >
            <span><FaTelegramPlane /></span> Send Message
          </button>
        </form>
        <div className='flex gap-3 mt-10'>
          {[{ logo: <FaSquareGithub />, link:'https://github.com/rudra2234molten'},{ logo: <FaFacebookSquare />, link: 'https://www.facebook.com/rohit.behera.319247' }, { logo: <FaLinkedin />, link: 'https://www.linkedin.com/in/rudra-behera-bbb45b2bb/' }, { logo: <FaPinterestP />, link: 'https://in.pinterest.com/jatin9078860210/' }, { logo: <FaInstagramSquare />, link:'https://www.instagram.com/rb_knight337/'}].map((data, index) => (
            <a href={data.link} key={index} className='text-[#757575] hover:text-white text-3xl transition-all duration-200 cursor-pointer'>{data.logo}</a>
          ))}
        </div>
        <p className='mt-5 text-[#757575] text-sm'>&copy; {currentYear} all writes are reserver by MolTenXoP</p>
      </div>
    </>
  )
}

export default Contact