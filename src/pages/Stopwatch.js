import React, { useRef, useState } from 'react'

const Stopwatch = () => {
    const [state,setState]=useState(0)
    const [isRunning, setIsRunning] = useState(false);
    const increment=()=>{
       const incre=parseInt(state++)
       setState(incre)
    }
  
 
  return (
    <div className='flex container mx-auto  p-5'>
            <div className='basis-5 mx-auto border border-opacity-25 border-black p-6 rounded-lg shadow-2xl mb-44 rounded-md bg-cyan-100'>
                <h3 className='text-center text-3xl font-mono mb-4'>casio</h3>
               <div className='flex mx-auto border border-black p-16 rounded-xl gap-10 items-center h-60 w-full'>
                  <div className=' p-2 '>
                  <h3 className='text-center text-3xl font-mono'>0</h3>
                    <button className='border bg-blue-500 border-black font-serif font-semibold p-3 text-3xl rounded-md'>Reset</button>
                  </div>
                  <div  className=' p-2'>
                  <h3 className='text-center text-3xl font-mono'>0</h3>
                    <button className='border bg-green-500 border-black font-serif font-semibold p-3 text-3xl rounded-md' onClick={start}>Start</button>
                  </div>
                  <div  className=' p-2'>
                  <h3 className='text-center text-3xl font-mono'>0</h3>
                    <button className='border bg-red-500 border-black font-serif font-semibold p-3 text-3xl rounded-md'>Stop</button>
                  </div>
               </div>
             <div>
   
  
             </div>
            </div>

        </div>

  )
}

export default Stopwatch
