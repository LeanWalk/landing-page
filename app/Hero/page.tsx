import { Container } from 'postcss';
import React from 'react';

const Hero = () => {
  return (
    <section className='md:py-20 py-10 bg-grandient-to-r from-graay-00 to-gray-200 space-10'>
    <div className='container mx-auto text-center'>
        <div className='text-6xl fle justify-center font-bold md:px-20 pb-10
        text-gradient bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent'>
            Launch your digital money transfer brand in no-time. 
        </div>
        <p className='text-lg mid:text-xl md:10 bg-gradient-to-r from-black to-gray-400 bg-clip-text text transparent font-bold'>Buidl and run your own money transfer platform effortless, so you can focus what you do best; onboarding customers and making money.</p>
    </div>

    <div className="flex gap-4 justify-center pt-10">
                <button className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold">Get Started</button>
                <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">Learn More</button>

            </div>

            <div className="pt-10">

       
                
            <video className="rounded-xl" autoPlay muted loop>
                <source src="/content/hero.mp4" type="video/mp4" />

            </video>

            </div>
    </section>
  )
}

export default Hero;