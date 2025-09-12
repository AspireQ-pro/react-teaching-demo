// import { BrowserRouter } from 'react-router-dom'
// import { Routes } from 'react-router-dom'
// import { Route ,Link} from 'react-router-dom'
// import './App.css'
// import Home from './components/Home'
// import WeatherForecasting from './components/weatherForecasting'
// import WeatherApp from './components/weatherApp'
// import Contact from './components/Contact'
// import User from './components/User'
// import Parent from './components/stateManagement/Parent'
// import { createContext ,useContext} from 'react'
// import { useState } from 'react'
// import { Provider } from 'react-redux'
// import Cart from './components/redux-state-management/Cart'
// import store from './components/redux-state-management/store'


//what is context api
// The Context API is a React feature that allows you to share state across your application 
// without having to pass props down manually at every level. It provides a way to create global 
// variables that can be passed around in a React app.

// const ThemeContext = createContext()

// function App() {
// const [theme,setTheme]=useState('light');
//   return (
    // <BrowserRouter>
      
    //     <nav style={{display:'flex',gap:'20px',justifyContent:'center',margin:'20px'}}>
    //       <Link to="/">Home</Link>
    //       <Link to="/weather-forecasting">Weather Forecasting</Link>
    //       <Link to="/weather-app">Weather App</Link>
    //       <Link to="/contact">Contact</Link>
    //   <Link to="/parent">State Management</Link>
    // </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/weather-forecasting" element={<WeatherForecasting />} />
    //     <Route path="/weather-app" element={<WeatherApp />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/user/:id" element={<User />} />
    //     <Route path="/parent" element={<Parent />} />
    //   </Routes>
    // </BrowserRouter>

    // <ThemeContext.Provider value={theme}>
    //   <div>
    //     <Toolbar/>
    //     <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>Change Theme</button>
    //   </div>
    // </ThemeContext.Provider>

//     <Provider store={store }>
//      <Cart />
//     </Provider>

//   );
// }

// function Toolbar(){
//   return(
//     <div>
//       <ThemeButton/>
//     </div>
//   )
// }

// function ThemeButton(){
//   const theme=useContext(ThemeContext);
//   return(
//     <div>
//       <button style={{background:theme==='light'?'white':'black',color:theme==='light'?'black':'white'}}>
//         {theme==='light'?'Light Mode':'Dark Mode'}
//       </button>
//     </div>
//   )
// }


// export default App



//weather forcasting

import React from 'react'
import Weather from './components/weather'
const App = () =>{
  return(
    <div className='app'>
      <Weather/>
    </div>
  )
}
export default App