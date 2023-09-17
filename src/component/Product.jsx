import React, { useContext,useState } from 'react'
import { AppContext } from '../Context'
import Modal from './Modal';


const Product = () => {
    const {data,searchData}=useContext(AppContext);

    const[popupContent,setPopupContent]=useState([]);
    const[popupToggle,setpopupToggle]=useState(false);


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = (searchData.length>0?searchData:data)?.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      const totalPages = Math.ceil(data.length / itemsPerPage);
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

     
    const changeContent=(detail)=>{
      setPopupContent([detail]);
      setpopupToggle(!popupToggle);
   }


  return (
   

  <div className='flex flex-col justify-center items-center' id='Product'>

  
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-3 lg:mx-40 mt-10 '>
        {
          currentItems?.map((item)=>{
                return(
                    <div className='border-[1px] border-[rgba(0,0,0,0.3) lg:w-[250px] sm:[300px] max-w-full mx-5  h-auto rounded-lg hover:scale-105 flex flex-col items-center justify-center '>
                       <div><span className='text-lg font-base'>Capsul Id : </span><span className='font-xl font-bold uppercase'>{item.capsule_id}</span></div> 
                       <div><span className='text-lg font-base'>Capsul Serial : </span><span className='font-xl font-bold uppercase'>{item.capsule_serial}</span></div> 
                       <div><span className='text-lg font-base'>Capsul Type : </span><span className='font-xl font-bold uppercase'>{item.type}</span></div> 
                       <div><span className='text-lg font-base'>Capsul Status : </span><span className='font-xl font-bold uppercase'>{item.status}</span></div> 
                       <div className='my-4'>
                        <button onClick={()=>changeContent(item)} className='border-none rounded-lg px-4 py-1 bg-violet-500 hover:bg-green-500 text-white uppercase'>Details</button>
                       </div>
                    </div>
                )
            })
        }
         </div>
        <div className='my-10' >
        
        <button className='w-[80px] h-[31px]  bg-transparent border-[1px] hover:bg-gray-300 border-[rgba(0,0,0,0.4)]' onClick={handlePreviousPage}>Previous</button>
       <span className='py-1 px-7 bg-transparent border-[1px] hover:bg-gray-300 border-[rgba(0,0,0,0.4)]'>{currentPage}</span>
      <button className='h-[31px] w-[80px] bg-transparent border-[1px] hover:bg-gray-300 border-[rgba(0,0,0,0.4)]' onClick={handleNextPage}>Next</button>  
    </div>
    <Modal popupContent={popupContent} popupToggle={popupToggle} changeContent={changeContent}/>
    </div>
   
   
  )
}

export default Product