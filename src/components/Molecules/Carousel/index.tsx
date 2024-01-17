'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Carousel({items}: {items: { name: string; description: string; link: string; }[]}) {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla overflow-hidden border-y border-white" ref={emblaRef}>
      <div className="embla__container flex px-10 py-10">
        {items.map((item, index) => (
          <div className="embla__slide p-10 m-5 min-w-0 flex-[0_0_20%] border border-white" key={index}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}