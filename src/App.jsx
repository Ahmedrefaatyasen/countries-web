
import './App.css';
import Navbar from './components/navbar';
import FilteredCountries from './components/filteredCountries'
import Home from './components/home';

import { UseCountries } from './context/countriesContext';

function App() {
  const { search ,mood} = UseCountries();
 

  return (
    <div className={mood==='light'?'bg-white text-black min-h-screen':'bg-gray-900 text-white min-h-screen'}>
    <Navbar />
    {search ? <FilteredCountries /> : <Home />}
    </div>
  )
}

export default App
