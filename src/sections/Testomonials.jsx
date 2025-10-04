import React from 'react'
import GlowCard from '../components/GlowCard'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'

const Testomonials = () => {
  return (
    <section id='testomonials' className='flex-center section-padding' >
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader title='What people say About Me' sub='✨ Client Feedback Highlits' />

            <div className='lg:columns-3 md:columns-2 columns-1 mt-16' >
                {testimonials.map(({ imgPath, name, mentions, review })=>(
                    <GlowCard card={{review}} >
                        <div className='flex item-center gap-3'>
                            <div>
                                <img src={imgPath} alt={name} />
                            </div>
                            <div>
                                <p className='font-bold'>{name}</p>
                                <p className='text-white-50' >{mentions}</p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testomonials