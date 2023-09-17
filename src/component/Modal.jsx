import React, { useContext, useState } from 'react'
import { AppContext } from '../Context';

const Modal = ({popupContent,popupToggle,changeContent}) => {
    const {data}=useContext(AppContext);
    

   
  return (
    <>
    {
        popupToggle &&(
            <div className='fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.4)] pt-[15%]' onClick={changeContent}>
            <div className='lg:w-[40%] lg:h-[80%] sm:mt-0 max-w-full mt-20 h-auto mx-2  bg-white lg:m-auto rounded-xl' onClick={(e)=>e.stopPropagation()}>
            <div className='w-full text-right '>
         <button className='bg-red-500 px-2 py-1 text-white' onClick={changeContent}>X</button>
               </div>
           <div >
               {
                   popupContent.map((item)=>{
                       const date = item.original_launch;
                       const localTime = new Date(date).toLocaleString();
                       return(
                           <div className='flex flex-col mx-4 justify-center items-start'>
                                 <div><span className='text-lg font-base'>Capsul Name : </span><span className='font-xl font-bold uppercase'>{item.capsule_id}-{item.capsule_serial}</span></div>
                                 <div><span className='text-lg font-base'>Capsul Type : </span><span className='font-xl font-bold uppercase'>{item.type}</span></div>
                                 <div><span className='text-lg font-base'>Capsul Status : </span><span className='font-xl font-bold uppercase'>{item.status}</span></div>
                                 <div><span className='text-lg font-base'> Launch(IST) : </span><span className='font-xl font-bold uppercase'>{localTime}</span></div>
                                 <div><span className='text-lg font-base'> No. of Landing : </span><span className='font-xl font-bold uppercase'>{item.landings}</span></div>
                                 <div><span className='text-lg font-base'> No. of Reuse : </span><span className='font-xl font-bold uppercase'>{item.reuse_count}</span></div>
                                 <div><span className='text-lg font-base'> Missons : </span><span className='font-xl font-bold uppercase'>{item.missions.map((item)=>item.name)}</span></div>
                                 <div><span className='text-lg font-base'> Detail: </span><span className='font-xl font-base'>{item.details===null?'Detail Not Available':item.details}</span></div>
                               </div>
                       )
                   })
               }
               </div>   
               </div> 
       
           </div>
        )
    }
    </>
   
  )
}

export default Modal