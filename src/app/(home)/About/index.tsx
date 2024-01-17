import React from 'react'

export function About() {
  return (
    <div className="flex w-3/6 flex-col bg-gray-200 m-10 gap-8 p-8 text-start">
      <h1 className='text-black text-xl'>About</h1>
      <p className='text-black'>Hi!, I'm Leonardo. I'm a full-stack developer and I'm currently working at <a href="https://www.alboompro.com/">Alboom</a> as a developer.</p>
      <p className='text-black'>I'm passionate about technology and my current stack is React, React Native, NodeJS, Typescript, Flutter, Docker, AWS, and more. My focus is on the backend, but I also like to work with the frontend.</p>
      <p className='text-black'> My hobbies are car mechanics, games, and programming.</p>
    </div>
  )
}