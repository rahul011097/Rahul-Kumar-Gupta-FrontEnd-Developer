import React,{useState,useEffect} from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
    const [Sticky, setSticky] = useState(false);
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const goTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);
  return (
    <>
    <nav className={`bg-transprent text-white flex justify-between items-center px-10 lg:py-2 py-0 transition ease-in-out delay-300 ${Sticky ? 'sticky' : 'bg-[#333] fixed top-0 right-0 left-0 z-[1000]'}`}>
    <div ><Link href='Home' className='font-bold text-3xl text-red-500' onClick={goTop}>Rahul.dev</Link></div>
        
        <ul className='hidden md:flex'>
            <li 
      className=" px-4 uppercase font-medium text-white text-lg  cursor-pointer hover:scale-105 duration-200">
        <Link to='Home' duration={500}>Home</Link>
      </li>
            <li   
     className=" px-4 uppercase font-medium text-white text-lg  cursor-pointer hover:scale-105 duration-200">
        <Link to='Search' smooth duration={500}>Search</Link>
      </li>
            <li   
className=" px-4  font-medium text-white  cursor-pointer text-lg hover:scale-105 duration-200 uppercase">
                <Link to='Product' smooth duration={900}>Capsul</Link></li>  
   
        </ul>

        <div onClick={()=>setHamburgerMenu(!hamburgerMenu)} className=' cursor-pointer p-4 z-10  text-white md:hidden '>
          {
            hamburgerMenu?<CloseIcon />:  <MenuIcon />
          }
          {
            hamburgerMenu &&(
                <ul className='flex flex-col  justify-center  items-center absolute top-[57px] left-0 w-full h-screen
                text-gray-500  bg-gradient-to-b from-black to-gray-800 '>
                   <li className='px-4 uppercase cursor-pointer  py-6  text-4xl'><a href='#Home'>Home</a></li>
                   <li className='px-4 cursor-pointer uppercase py-6  text-4xl'><a href='#Product'>Capsul</a></li>
                 
   
                 </ul>
            )
          }
        
        </div>
    </nav>
    </>
  )
}

export default Navbar