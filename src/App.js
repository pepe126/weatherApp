import './App.css';
import React, {useEffect, useState} from 'react';
import WeatherCard from './components/WeatherCard';


const App = () => {
  const APP_KEY = "0bc3517da274445f8ee104324203011";
  const [weatherDatas, setWeather] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Rome');
  

  useEffect(() => {
    getPosition();
    getWeather();    
  },[query]);

  const getWeather = async () => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APP_KEY}&q=${query}`);
    const data = await response.json()
    setWeather(data);
  }

  const getPosition = async () => {
    if ('geolocation' in navigator){
      const positionResponse = await fetch(`http://ip-api.com/json`);
      const positionData = await positionResponse.json()
      setQuery(positionData.city);
      
    }
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    if(search){setQuery(search);}
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="SearchForm d-flex justify-content-center">
        <input placeholder = 'Location...' className='search' type='text' value = {search} onChange = {updateSearch} />
      </form>
      <div className='d-flex justify-content-center'>
        {weatherDatas && (<WeatherCard 
          icon = {weatherDatas.current.condition.icon}
          location = {weatherDatas.location.name}
          condition = {weatherDatas.current.condition.text}
          temperature = {weatherDatas.current.temp_c}
        />)}
      </div>
      
    </div>
  )
}

export default App;