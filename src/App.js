
import { useEffect, useState } from 'react';
import './App.css';
import {AppContext} from './Context'
import Banner from './component/Banner';
import Navbar from './component/Navbar';
import Search from './component/Search';
import Product from './component/Product';

function App() {
  const[data,setData]=useState([]);
  const [searchData,setSearchData]=useState([])
  const BASE_URL = 'https://api.spacexdata.com/v3/';
  const END_POINT ='capsules' ;
  const url = BASE_URL+END_POINT;
   
  const fetchData =async(url)=>{
  const res = await fetch(url);
  const result = await res.json();
  setData(result);
  }
 
  useEffect(()=>{
 fetchData(url)
  },[])
  
  return (
    <div className="App">
     <AppContext.Provider value={{ searchData,setSearchData,data}}>
       <Navbar/>
       <Banner/>
       <Search/>
       <Product/>
       </AppContext.Provider>
    </div>
  );
}

export default App;
