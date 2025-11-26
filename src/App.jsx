import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import'./components/Navbar'

function App() 
{
  const[city,setCity]=useState("")
  const[weather,setWeather]=useState("")
  const[temp,setTemp]=useState("")
  const[desc,setDesc]=useState("")
  function handleCity (evt)
  {
setCity(evt.target.value)
  }
function getWeather(){
  var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f179cc49812f1240b8ba0b2301bb852`)
  weatherData.then(function(sucess){
console.log(sucess.data)
setWeather(sucess.data.weather[0].main)
setTemp(sucess.data.main.temp)
setDesc(sucess.data.weather[0].description)
  })
}

  return (
          <div className='bg-[linear-gradient(135deg,#3b82f6,#22c55e)] p-20'>
         <div className='bg-[linear-gradient(45deg,_#34d399,_#3b82f6)] rounded-md p-4'>
          <h1 className='text-2xl font-medium'>Weather Report</h1>
          <p>I can give you the weather report for your city !!!</p>
          <input onChange={handleCity} type="text" placeholder='Enter your city Name' className='mt-2 border border-black rounded-md font-normal'/>
          <button onClick={getWeather} className='ms-2 p-1 font-normal text-white rounded bg-[linear-gradient(45deg,_#34d300,_#3b82f0)]'>Click Me</button>
          <div className='mt-2'>
            <h1><b>Weather:</b>{weather}</h1>
            <h1><b>Temperature:</b>{temp}</h1>
            <h1><b>Description:</b>{desc}</h1>
          </div>
         </div>
      </div>
  )
}

export default App
