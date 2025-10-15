import { createContext,useContext,useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
const CountriesContext = createContext();

export const CountriesProvider = ({children})=>{
    const[mood,setMood]=useState('light');
    const[search,setSearch]=useState(false);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
     const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region');
                
                setCountries(response.data);
                
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };
        fetchCountries();
    }, [setCountries]);


    return <CountriesContext.Provider value={{mood,setMood,search, setSearch, countries, setCountries, searchTerm, setSearchTerm, filteredCountries, setFilteredCountries}}>{children}</CountriesContext.Provider>
}

export const UseCountries = () => useContext(CountriesContext);
