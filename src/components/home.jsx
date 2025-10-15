
import { UseCountries } from '../context/countriesContext';

const Home = () => {
    const { countries} = UseCountries();
   

    return (
        <section className='mt-[3rem] grid grid-cols-1 sm:grid sm:grid-cols-4 gap-8 sm:p-8'>
            {countries.map((country,index)=>
            <div className='border border-gray-400 p-2 flex flex-col gap-2' key={index}>
                <h2 className='text-[1.5rem] font-[600]'>{country.name.common}</h2>
                <p>Capital: {country.capital}</p>
                <p className='text-red-400'>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <img src={country.flags.png} alt={country.name.common + " flag"} />
            </div>
            )}

            
        </section>
    );
}

export default Home;
