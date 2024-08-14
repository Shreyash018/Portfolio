// import React from 'react'
// import banner from './img/banner.png'

// function About() {

//   const handleButtonClick = () => {
//     window.open("https://github.com/Shreyash018", "_blank");
//   };

//   return (
//     <div className='bg-zinc-900'>
//     <div  className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-["Neue_Montreal"]'>
//         <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.0vw] tracking-tight">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</h1>
//         <div className=' w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#a1b562] '>
//         <div className='w-1/2 '>
//             <h1 className='text-7xl'>My approach : </h1>
//             <button className='flex gap-10 items-center uppercase px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white' onClick={handleButtonClick}>Read More
//             <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
//             </button>
//         </div>
//         <div className=' w-1/2 h-[70vh] rounded-3xl '> 
//         <img className='object-cover h-[40vw] w-[40vw]' src={banner}></img>
//         </div>
//         </div>
//     </div>
//    </div>
//   )
// }

// export default About

import React from 'react';
import banner from './img/banner.png';

function About() {
  const handleButtonClick = () => {
    window.open("https://github.com/Shreyash018", "_blank");
  };

  return (
    <div className='bg-zinc-900'>
      <div className='w-full py-10 px-6 md:py-20 md:px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-["Neue_Montreal"]'>
        <h1 className="font-['Neue_Montreal'] text-3xl md:text-[4vw] leading-snug md:leading-[4.0vw] tracking-tight">
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.
        </h1>
        <div className='w-full flex flex-col md:flex-row gap-10 md:gap-5 border-t-[1px] mt-10 md:mt-20 pt-10 border-[#a1b562]'>
          <div className='md:w-1/2'>
            <h1 className='text-4xl md:text-7xl'>My approach:</h1>
            <button className='flex gap-3 md:gap-10 items-center uppercase px-6 md:px-10 py-4 md:py-6 mt-6 md:mt-10 bg-zinc-900 rounded-full text-white' onClick={handleButtonClick}>
              Read More
              <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
          <div className='md:w-1/2'>
            <img className='object-cover w-full h-[40vh] md:h-[70vh] rounded-3xl' src={banner} alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
