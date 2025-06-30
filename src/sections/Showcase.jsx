import React, { useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function Showcase() {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
        gsap.fromTo(
                card,
                {
                    y:50, opacity:0
                },
                {
                    y:0,
                    opacity:1,
                    duration:1,
                    delay:0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        });

        gsap.fromTo(
            sectionRef.current, 
            {opacity:0}, 
            {opacity: 1, duration: 1.5}
        )
    }, []);

  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src='/images/salmanfarsischool.png' alt='Salman Farsi School Portal'/>
                    </div>
                    <div className='text-content'>
                        <h2>All-in-One School Management System for Modern Educational Institutions - Salman Farsi School</h2>
                        <p className='text-white-50 md:text-xl'>A comprehensive solution designed to simplify and centralize school operations, including student information management, fee tracking, academic reporting, and administrative oversight. Built to enhance efficiency, transparency, and informed decision-making across all levels of school management.</p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src='/images/Gosbteknopark.png' alt='Gosb Teknopark'/>
                        </div>
                        <div className='project-info'>
                            <h2>Gosb Teknopark</h2>
                            <a href='https://gosbteknopark.com/' target='_blank' rel='noopener noreferrer' className='live-link'>
                                View Live
                            </a>
                        </div>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src='/images/liveprotezhair.png' alt='Live Protez Saç'/>
                        </div>
                         <div className='project-info'>
                            <h2>Live Protez Hair</h2>
                            <a href='http://liveprotezsac.com/' target='_blank' rel='noopener noreferrer' className='live-link'>
                                View Live
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Showcase