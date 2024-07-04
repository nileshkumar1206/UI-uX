// src/components/Hero.js
import React from 'react';
import Globe from '../../assets/Globe';

function Hero() {
  return (
    <div className='hero text-white flex flex-col md:flex-row items-center justify-between lg:mb-6 lg:px-20'>
      <div className="left flex flex-col py-16 px-4 w-full relative sm:h-1/2 md:w-1/2">
        <span className='text-xl font-mono font-semibold mb-6 typing-animation'>
          Hey, I'm Nilesh! 👋<br/>
          DESIGN WITH ME.....
        </span>
        <span className='text-md'>
          As a passionate UI/UX and Graphic Designer, I specialize in creating visually compelling and user-friendly designs. My work bridges the gap between aesthetics and functionality, ensuring a seamless user experience. With a keen eye for detail and a deep understanding of design principles, I craft intuitive interfaces and striking visuals.
          <br/><br/>
          My portfolio showcases a variety of projects, from sleek mobile apps to impactful branding materials. I stay ahead of design trends to deliver innovative solutions that resonate with users. Let's collaborate to create something amazing!
        </span>
        <div className="apps-used mt-8">
          <h3 className="text-xl font-mono font-semibold mb-4">Apps I Use</h3>
          <div className="app-icons flex flex-wrap space-x-4">
            <img src="https://cdn.icon-icons.com/icons2/3765/PNG/512/figma_icon_231207.png" alt="Figma" className="app-logo" />
            <img src="https://www.skillfinder.com.au/media/wysiwyg/Canva-Logo-White-1080.png" alt="Canva" className="app-logo" />
            <img src="https://i.pinimg.com/originals/36/ca/5b/36ca5b29e647ef60e8863aa0ea75b7e0.png" alt="Framer" className="app-logo" />
            <img src="https://as1.ftcdn.net/v2/jpg/02/22/71/76/1000_F_222717635_EPF2CPpx9fHXgIB9qoOjUXIkgWPxmYLq.jpg" alt="Spline" className="app-logo" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdWS3VROEf_60yzRd0qdw2vAM3LE6ugOqbA&s" alt="Kittl.ai" className="app-logo" />
          </div>
        </div>
      </div>
      <div className="right w-screen sm:mb-16 md:w-1/2 h-[32vh] lg:h-[80vh] md:h-[40vh]">
        <Globe path="/space_boi.glb" />
      </div>
      <style jsx>{`
        .typing-animation {
          overflow: hidden;
          border-right: .15em solid orange;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: .15em;
          animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: orange; }
        }

        .app-icons {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .app-logo {
          width: 50px;
          height: auto;
          transition: transform 0.3s;
        }
        .app-logo:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default Hero;
