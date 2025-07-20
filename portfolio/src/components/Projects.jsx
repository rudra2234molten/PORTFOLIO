import React from 'react'
import bank from '/src/assets/banklogomain.png'
import mercedes from '/src/assets/mercedes.png'
import babel from '/src/assets/babel.png'
import coursebootcamp from '/src/assets/coursebootcamp.png'
import hotelbook from '/src/assets/hotelbook.png'
import html from '/src/assets/html.png'
import css from '/src/assets/css.png'
import django from '/src/assets/django.png'
import tailwind from '/src/assets/tailwind.png'
import react from '/src/assets/react.png'
import python from '/src/assets/python.png'
import javascript from '/src/assets/javascript.png'
import gfg from '/src/assets/gfg.png'
import rollup from '/src/assets/rollup.png'
import Card from './Card'

const projectArray = [
  {
    img: bank,
    title: 'Bank Management System',
    detail: 'A Bank Management System using Django featuring dynamic page routing, OTP authentication via email, and automated transaction alerts (deposits/withdrawals) to enhance user security and engagement.',
    used: [django, html, css, python],
    link: 'https://rudra2234.pythonanywhere.com/'
  },
  {
    img: hotelbook,
    title: 'Hotel Booking Web',
    detail: 'A full-stack hotel booking platform using React.js and Node.js, implementing dynamic routing, JWT-based authentication, and role-based authorization (user/admin) with features like real-time room availability, booking management, and secure payment integration for a seamless user experience.',
    used: [html, javascript, css, tailwind],
    link: 'https://hotel-book-its-rudra.netlify.app/'
  },
  {
    img: mercedes,
    title: 'Mercedes Web Clone',
    detail: 'A pixel-perfect Mercedes-Benz website clone using modern frontend technologies (HTML, CSS, JavaScript), replicating UI/UX elements, animations, and responsive design to deliver a seamless user experience.',
    used: [html, javascript, css],
    link: 'https://mercedes-its-rudra.netlify.app/'
  },
  {
    img: coursebootcamp,
    title: 'Course Bootcamp',
    detail: 'A full-stack course bootcamp platform using React.js, implementing dynamic routing, private routes, and role-based access control (admin/user) with JWT authentication to ensure secure and personalized learning experiences.',
    used: [react, html, javascript, tailwind],
    link: 'https://course-dashboard-demo-molten.netlify.app/'
  },
  {
    img: babel,
    title: 'BabelJs Clone',
    detail: 'Developed a responsive Babel.js documentation website using React.js, featuring dynamic content rendering, interactive code examples, and a search-friendly UI to enhance developer experience and accessibility.',
    used: [react, html, javascript, tailwind],
    link: 'https://babel-its-molten.netlify.app/'
  },
  {
    img: rollup,
    title: 'BabelJs Clone',
    detail: 'Developed Rollup documentation website using React.js, interactive code examples, and a search-friendly UI to enhance developer experience and accessibility.',
    used: [react, html, javascript, css],
    link: 'https://roll-up-molten.netlify.app/'
  },
  {
    img: gfg,
    title: 'BabelJs Clone',
    detail: 'Developed Geeks For Geeks course site demo using React.js, interactive code examples, and a search-friendly UI to enhance developer experience and accessibility.',
    used: [react, html, javascript, css],
    link: 'https://geeks-for-geeks-molten.netlify.app/'
  },
]

const Projects = () => {
  return (
    <div className='w-full p-10 sm:mt-10' id='projects'>
      <h1 className='text-4xl border-b-2 inline-block py-4 border-b-gray-500'>My Projects</h1>
      <div className='mt-10 flex flex-wrap gap-8 justify-center'>
        {projectArray.map((data, index) => (
          <Card key={index} img={data.img} title={data.title} detail={data.detail} used={data.used} link={data.link} />
        ))}
      </div>
    </div>
  )
}

export default Projects