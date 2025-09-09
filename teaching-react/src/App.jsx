import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route ,Link} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import WeatherForecasting from './components/weatherForecasting'
import WeatherApp from './components/weatherApp'
import Contact from './components/Contact'
import User from './components/User'
import Parent from './components/stateManagement/Parent'


function App() {

  return (
    <BrowserRouter>
    <nav style={{display:'flex',gap:'20px',justifyContent:'center',margin:'20px'}}>
      <Link to="/">Home</Link>
      <Link to="/weather-forecasting">Weather Forecasting</Link>
      <Link to="/weather-app">Weather App</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/parent">State Management</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather-forecasting" element={<WeatherForecasting />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/parent" element={<Parent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
