import React, { useRef, useState} from 'react';
import { useEffect } from 'react';
import './weather.css'
import SearchIcon from '@mui/icons-material/Search';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';

const Weather = () => {
    
    const inputRef = useRef()
        const [weatherData,setWeatherData]=useState(false)
        const[iconUrl,setIconUrl] =useState('');
        // Removed unused 'city' state
        const apiKey = import.meta.env.VITE_APP_ID;
console.log("API Key:", apiKey);  // <== Check this in browser console
        const search = async (city)=>{
            if(!city) return;
        try {
            const url = `https://api.openweathermap.org/data/2.5a/weather?q=${city}&units=metric&appid=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
        
             if (data.weather && data.weather.length > 0) {
        const iconCode = data.weather[0].icon;
        setIconUrl(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);
      } else {
        setIconUrl('');
      }

            
            console.log(data)
           
           
            setWeatherData({
                // humidity:data.main.humidity,
                windSpeed:data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name

            })
        }catch(error){      console.error("Error fetching weather:", error);
}
    }


    useEffect(()=>{
        search("Pune");
    },[]);
    return(
        <div className='weather'>
            <h1>Weather</h1>
            <div className='searchbar'>
                <input ref={inputRef} type="text" placeholder='Search' />
                
<SearchIcon sx={{
    width: "50px",
    height: "50px",
    padding: "12px",
    borderRadius: "50%",
    background: "#ebfffc",
    cursor: "pointer",
    color: "#333"
}} onClick={()=>search(inputRef.current.value)} />            </div>
{/* <> */}

 {iconUrl && <img src={iconUrl} alt="weather icon" style={{ width: '150px', margin: '20px 0' }} />}
<p className='temperature'>{weatherData.temperature}&deg;C</p>
<p className='location'>{weatherData.location}</p>
<div className='weather-data'>
    
    <div className='col'>
        <WaterIcon sx={{width:"26px",marginTop:"10px"}}/>
        </div>
        <div>
        <p>{weatherData.humidity}%</p>
        <span>Humidity</span>
        </div>
    
    <div className='col'>
        <AirIcon sx={{width:"26px",marginTop:"10px"}}/>
    </div>
    <div>
    <p>{weatherData.windSpeed}</p>
    <span>wind speed</span>
    </div>
</div>
{/* </> */}

</div>
    );
};

export default Weather;