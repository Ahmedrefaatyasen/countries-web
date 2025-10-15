
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { UseCountries } from '../context/countriesContext';





const Navbar = () => {
const {setSearch, setMood,searchTerm, setSearchTerm, countries, setFilteredCountries } = UseCountries();
const fetchSearchedCountries = async (e) => {
       e.preventDefault();
       const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()));
       setFilteredCountries(filteredCountries);
       setSearch(true);
    }

    return (
        <header>
            <nav className='flex justify-between items-center capitalize p-4 shadow-md'>
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
            
        </header>
    );
}

export default Navbar;
