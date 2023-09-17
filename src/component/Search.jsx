import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { AppContext } from '../Context';

const Search = () => {
  const {data,setSearchData,searchData} =useContext(AppContext)
  const [input,setInput]=useState('');

  const searchHandle =(e)=>{
    const value = e.target.value;
    setInput(value);
    if (value !== '') {
      const results = data?.filter((capsul) => {
        return capsul?.type?.toLowerCase().startsWith(value?.toLowerCase()) ||
        capsul?.status?.toLowerCase().startsWith(value?.toLowerCase()) ||
        capsul?.original_launch?.toLowerCase().startsWith(value?.toLowerCase());

      });
      setSearchData(results);
    } else {
      setSearchData(data);
      
    }
  }
  console.log(searchData);
  return (
    <div className='lg:mt-10 mt-3 ' id='Search'>
        
        <form className='lg:w-[50%] max-w-[90%] h-[2.5rem] border-none rounded-lg py-0 px-4  bg-gray-200 flex justify-center items-center m-auto'>
            <SearchIcon className='text-blue-500'/>
            <input
            type='text'
          placeholder="Type to search..."
         value={input}
         className='bg-transparent border-none h-full text-[1.25rem] w-full ml-1 focus:outline-none'
         onChange={searchHandle}
      />
        </form>
    </div>
  )
}


export default Search