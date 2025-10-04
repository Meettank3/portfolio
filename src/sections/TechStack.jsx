import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React from 'react'
import TechIcons from '../components/Models/TechLogos/TechIcons'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'

const TechStack = () => {


    useGSAP(()=>{
        gsap.fromTo('.tech-card', 
            //from
            {
                y: 50,
                opacity: 0
            },
            //to
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut',
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center'
                }
            }
        );
    });

return (
    <div id='skills' className='flex-center section-padding flex-col' >
        <div className='w-full h-full md:px-10 px-5' >
            <TitleHeader 
            title="My Prefered Tech Stack " 
            sub="🤝 What I Bring To The Table"/>
        </div>
        <div className='tech-grid'  >
            {techStackIcons.map((icon)=> (
                <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'> 
                    <div  className='tech-card-animated-bg' />
                    <div className='tech-card-content'>
                        <div className='tech-icon-wrapper'>
                            <TechIcons model={icon} />
                        </div>
                        <div className='padding-x w-full'>
                            <p> {icon.name} </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
}

export default TechStack