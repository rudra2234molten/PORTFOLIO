import React from 'react'
import resumeUrl from '/Rudra Narayan Behere(RESUME).pdf'
import { FaDownload } from "react-icons/fa";


const skills = [
  { title: 'HTML', percent: '95%' },
  { title: 'CSS', percent: '80%' },
  { title: 'JavaScript', percent: '65%' },
  { title: 'Python', percent: '73%' },
  { title: 'Django', percent: '77%' },
  { title: 'MERN', percent: '60%' },
  { title: 'GSAP', percent: '40%' },
  { title: 'TypeScript', percent: '35%' },
];

const About = () => {

  const handleDownload = () => {

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Rudra_Behera_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className='w-full p-10 sm:mt-50' id='about'>
        <h1 className='text-4xl border-b-2 inline-block py-4 border-b-gray-500'>Rudra N Behera</h1>
        <p className='text-justify text-[1rem] sm:text-[1.4rem] py-5 text-[#757575]'><span className='text-4xl'>A</span> passionate Frontend Developer with expertise in ReactJS, Django, and modern web technologies. I hold a Bachelor’s in Computer Science and specialize in building dynamic, user-friendly applications like Netflix clones, social media platforms, and banking systems. My projects showcase my skills in responsive design, REST API integration, and database management.Beyond coding, I enjoy playing musical instruments, which helps me stay creative and focused. I’m an avid gamer who appreciates problem-solving in virtual worlds and a music enthusiast who finds inspiration in melodies. I also love reading religious books to gain wisdom and perspective.Driven by curiosity, I constantly explore new technologies like GSAP animations and Tailwind CSS to elevate my work. Let’s connect and build something amazing together!</p>
      </div>
      <div className='w-full p-10 '>
        <h1 className='text-4xl border-b-2 inline-block py-3 border-b-gray-500 mb-5'>My Skills</h1>
        <div className='h-auto w-full'>
          {skills.map((skill, index) => (
            <div key={index} className='mb-5'>
              <h1 className='sm:text-[1.2rem] pb-1 text-[#757575]'>{skill.title}</h1>
              <div className='h-5 sm:h-6 w-full bg-white'>
                <div className={`h-full bg-[#616161]`} style={{
                  width: '0%',
                  animation: 'expandWidth linear forwards',
                  animationTimeline: 'view()',
                  animationRange: 'entry 10% cover 20%',
                  '--final-width': skill.percent,
                }}></div>
              </div>
            </div>
          ))}
        </div><br />
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-white text-black  hover:bg-slate-200 transition-colors font-semibold cursor-pointer flex justify-center items-center gap-1"
        >
          <FaDownload /> Download Resume
        </button>
      </div>
    </>
  )
}

export default About