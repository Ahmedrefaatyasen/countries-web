import { UseCountries } from '../context/countriesContext';

const FilteredCountries = () => {
    const{filteredCountries,setSearch}= UseCountries();

    const handleBack = () => {
        setSearch(false);
    }

    return (
        <div>
            <button onClick={handleBack} className='m-4 p-2 border border-gray-600'>Back</button>
            {filteredCountries.map((country,index)=>
            <div className='border w-[300px] border-gray-400 p-2 flex flex-col gap-2' key={index}>
                <h2 className='text-[1.5rem] font-[600]'>{country.name.common}</h2>
                <p>Capital: {country.capital}</p>
                <p className='text-red-400'>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <img src={country.flags.png} alt={country.name.common + " flag"} className='w-[200px]' />
            </div>
            )}
        </div>
    );
}

export default FilteredCountries;
