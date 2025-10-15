
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { UseCountries } from '../context/countriesContext';
import { useState } from "react";





const Navbar = () => {
    const[mobileScreen, setMobileScreen] = useState(false);
   
const {setSearch, setMood,mood,searchTerm, setSearchTerm, countries, setFilteredCountries } = UseCountries();
const fetchSearchedCountries = async (e) => {
       e.preventDefault();
       const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()));
       setFilteredCountries(filteredCountries);
       setSearch(true);
    }

    return (
        <header>
            <nav className='hidden sm:flex sm:justify-between sm:items-center sm:capitalize sm:p-4 sm:shadow-md'>
                <h1 className='text-[2rem] font-[600]'>world countries</h1>
                <form  className='border border-gray-600 flex items-center p-2'> 
                    <input onChange={(e)=>setSearchTerm(e.target.value)} className='border-none outline-none' type="text" placeholder="Search for a country..." />
                    <button  onClick={(e) => fetchSearchedCountries(e)} className='cursor-pointer' type="submit"><FaSearch /></button>
                </form>
                <div className='flex items-center gap-[20px]'>
                    <MdLightMode onClick={()=>setMood('light') } className="cursor-pointer" />

                    <MdDarkMode onClick={()=>setMood('dark')} className="cursor-pointer" />


                    
                </div>
            </nav>
            <nav className='sm:hidden relative flex justify-between items-center p-4 shadow-md'>
                <h1 className='sm:hidden text-[1.5rem] font-[600] p-2'>world countries</h1>
                <GiHamburgerMenu onClick={()=>setMobileScreen(true)} className='sm:hidden cursor-pointer text-2xl' />
                {mobileScreen && <div className={mood==="light"?"absolute w-full h-[200px] top-0 left-0 bg-gray-100 flex flex-col items-center pt-10":"absolute w-full h-[200px] top-0 left-0 bg-gray-800 flex flex-col items-center pt-10"}>
                <form  className={mood==="light"?'border border-gray-600 flex items-center p-2 bg-white mt-2':"border border-gray-100 p-2"}> 
                    <input onChange={(e)=>setSearchTerm(e.target.value)} className={'border-none outline-none'} type="text" placeholder="Search for a country..." />
                    <button  onClick={(e) => fetchSearchedCountries(e)} className='cursor-pointer' type="submit"><FaSearch /></button>
                </form>
                <div className={mood==='dark'? `flex items-center gap-[20px] bg-gray-800 mt-2 p-2`:`flex items-center gap-[20px] bg-white mt-2 p-2`}>
                    <MdLightMode onClick={()=>setMood('light') } className="cursor-pointer" />
                    <MdDarkMode onClick={()=>setMood('dark')} className="cursor-pointer" />
                </div>
                <button onClick={()=>setMobileScreen(false)} className=" m-5 p-1 border text-red-500 cursor-pointer border-gray-600 rounded">X</button>
                 </div>} 
            </nav>
            
        </header>
    );
}

export default Navbar;
