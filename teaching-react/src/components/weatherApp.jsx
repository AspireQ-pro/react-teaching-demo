import { use, useEffect ,useState} from "react";
import axios from "axios";

function weatherApp() {
const [weatherData, setWeatherData] = useState(null);


    useEffect(() => {
             fetch(`https://api.open-meteo.com/v1/forecast?latitude=38.6&longitude=97.25&current_weather=true`)
                .then(response => response.json())
                .then(data =>setWeatherData(data.current_weather))
                .catch(error => console.error(error));
        }, [])

        useEffect(() => {
            console.log(weatherData);
        }, [weatherData]);
        // using axios
        const fetchWeatherData = () => {
            axios.get(`https://api.open-meteo.com/v1/forecast?latitude=38.6&longitude=97.25&current_weather=true`)
                .then(response => setWeatherData(response.data.current_weather))
                .catch(error => console.error(error));
        }
useEffect(() => {
    fetchWeatherData();
}, []);


    return (
        <div>
            <h1>Weather App</h1>
            {weatherData && (
                <div>
                    <h2>Current Weather</h2>
                    <p>Temperature: {weatherData.temperature}°C</p>
                    <p>Wind Speed: {weatherData.windspeed} km/h</p>
                </div>
            )}
        </div>
    );
}

export default weatherApp;