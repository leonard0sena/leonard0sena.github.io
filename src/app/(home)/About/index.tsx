import React from 'react'

export function About() {
  return (
    <div className="flex w-3/6 flex-col border-white border-2 m-10 gap-8 p-8 text-start">
      <h1 className='text-white text-xl'>About</h1>
      <p className='text-white'>Hi!, I&apos;m Leonardo. I&apos;m a full-stack developer and I&apos;m currently working at <a href="https://www.alboompro.com/">Alboom</a> as a developer.</p>
      <p className='text-white'>I&apos;m passionate about technology and my current stack is React, React Native, NodeJS, Typescript, Flutter, Docker, AWS, and more. My focus is on the backend, but I also like to work with the frontend.</p>
      <p className='text-white'> My hobbies are car mechanics, games, and programming.</p>
    </div>
  )
}